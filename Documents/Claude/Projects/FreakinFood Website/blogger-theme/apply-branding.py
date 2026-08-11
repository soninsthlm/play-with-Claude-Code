#!/usr/bin/env python3
"""
Apply FreakinFood branding to the Fooddy Blogger theme.

    python3 apply-branding.py original.xml freakinfood-theme.xml

Surgical on purpose: it swaps the <b:skin> CSS, the font links and the meta
placeholders, and fixes a few broken identifiers in the theme's inline JS.
Every other byte -- including the minified jQuery plugins and the packed
"Theme Functions" blob -- is copied through untouched.
"""

import re
import sys
from pathlib import Path

HERE = Path(__file__).parent

FONT_LINK = (
    "    <link href='https://fonts.googleapis.com' rel='preconnect'/>\n"
    "    <link crossorigin='anonymous' href='https://fonts.gstatic.com' rel='preconnect'/>\n"
    "    <link href='https://fonts.googleapis.com/css2?"
    "family=Newsreader:ital,wght@0,300;0,400;1,200;1,300;1,400"
    "&amp;family=Be+Vietnam+Pro:wght@400;500;600"
    "&amp;family=Inter:wght@400;500"
    "&amp;display=swap' media='all' rel='stylesheet' type='text/css'/>"
)

META_DESCRIPTION = (
    "Recipes, technique and food writing from Ema &amp; Son - Vietnamese and "
    "Italian cooking out of a Nordic kitchen."
)
META_KEYWORDS = (
    "freakinfood, recipes, food blog, vietnamese recipes, italian recipes, "
    "nordic cooking, food photography, cooking technique"
)

SOCIAL_META_REPLACEMENT = """    <!-- Social profile meta: fill these in before publishing.
         Blogger renders whatever is here verbatim, so placeholder text
         like "@username" would ship to Facebook and X as real values.
    <meta content='YOUR_FB_APP_ID' property='fb:app_id'/>
    <meta content='@freakinfood' name='twitter:site'/>
    <meta content='@freakinfood' name='twitter:creator'/>
    -->"""


# Injected before </body>. Builds the hamburger and toggles the panel that
# skin.css styles. SelectNav.js still runs and still builds its <select>;
# the CSS just never shows it.
MOBILE_NAV_SCRIPT = """<script type='text/javascript'>
//<![CDATA[
(function () {
  var menu = document.getElementById('menu');
  if (!menu) { return; }
  var nav = menu.querySelector('ul#nav');
  if (!nav || menu.querySelector('.ff-nav-toggle')) { return; }

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'ff-nav-toggle';
  btn.setAttribute('aria-label', 'Menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'nav');
  btn.innerHTML = '<span></span><span></span><span></span>';

  function setOpen(open) {
    if (open) { menu.className += ' ff-nav-open'; }
    else { menu.className = menu.className.replace(/\\s*ff-nav-open/g, ''); }
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  function isOpen() { return menu.className.indexOf('ff-nav-open') > -1; }

  btn.onclick = function (e) { e.stopPropagation(); setOpen(!isOpen()); };
  document.addEventListener('click', function (e) {
    if (isOpen() && !menu.contains(e.target)) { setOpen(false); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) { setOpen(false); }
  });

  menu.insertBefore(btn, menu.firstChild);
})();
//]]>
</script>
</body>"""

# The stock footer "About" widget shipped lorem ipsum and a stock photo of a
# stranger. Kept the class names so the widget's own <style> still applies.
# NOTE: this block is outside <b:skin>, so Blogger does NOT substitute
# $variables here -- colours must be literals.
FOOTER_ABOUT_CONTENT = """<div class="about-text">
<p>Vietnamese and Italian cooking, made in a Nordic kitchen.</p>
<p>Recipes, technique and food writing by Ema &amp; Son &mdash; heritage on one side, whatever looked good at the market on the other.</p>
<p><a class="about-more" href="/p/about-us.html">More about us &rarr;</a></p>
</div>
<!-- Portrait: upload an image via Layout &gt; this widget &gt; Edit, paste the
     URL below, then remove these two comment markers. Renders as a circle.
<div class="about-widget-image">
<img alt="Ema and Son" src="YOUR_IMAGE_URL" />
</div>
-->
<div class="icons-social">
<ul id="social">
<li><a class="instagram" href="#" title="instagram"></a></li>
<li><a class="pinterest" href="#" title="pinterest"></a></li>
<li><a class="facebook" href="#" title="facebook"></a></li>
<li><a class="email" href="mailto:info@freakinfood.com" title="email"></a></li>
</ul></div>
<style>
.about-widget-image { margin-right: 15px; float: left; }
.about-widget-image img { width: 120px; height: 120px; object-fit: cover; border-radius: 100%; }
.about-text p { margin-bottom: 12px; font-size: 14px; line-height: 1.65; }
.about-more { color: #9d4225; font-family: 'Inter', system-ui, sans-serif; font-size: 11px; letter-spacing: 0.7px; text-transform: uppercase; }
.icons-social { clear: both; padding-top: 6px; overflow: hidden; }
.icons-social li { display: inline; padding: 0; float: left; }
.icons-social #social a { display: block; margin-right: 18px; color: #434840; text-align: center; font-size: 18px; }
.icons-social #social a:hover { color: #9d4225; }
.icons-social #social a:before { display: inline-block; font: normal normal normal 18px/1 FontAwesome; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.icons-social .facebook:before { content: "\\f09a"; }
.icons-social .twitter:before { content: "\\f099"; }
.icons-social .instagram:before { content: "\\f16d"; }
.icons-social .pinterest:before { content: "\\f0d2"; }
.icons-social .email:before { content: "\\f0e0"; }
</style>"""


def sub_once(pattern, replacement, text, label, flags=0):
    """Substitute exactly one occurrence, or fail loudly."""
    new, count = re.subn(pattern, replacement, text, flags=flags)
    if count != 1:
        raise SystemExit(
            f"FAILED: '{label}' matched {count} times (expected 1).\n"
            "The source theme differs from the one this script was written "
            "against. Fix the pattern rather than letting it pass silently."
        )
    print(f"  ok  {label}")
    return new


def main():
    if len(sys.argv) != 3:
        raise SystemExit(__doc__)

    src, dst = Path(sys.argv[1]), Path(sys.argv[2])
    xml = src.read_text(encoding="utf-8")
    skin_css = (HERE / "skin.css").read_text(encoding="utf-8")

    print(f"Reading {src}")

    # 1. Fonts. Also upgrades the request off plain http, which would
    #    otherwise be blocked as mixed content on an https blog.
    xml = sub_once(
        r"    <link href='http://fonts\.googleapis\.com/css\?family=Open\+Sans[^\n]*\n",
        lambda m: FONT_LINK + "\n",
        xml,
        "Google Fonts -> Newsreader / Be Vietnam Pro / Inter",
    )

    # 2. Meta description + keywords.
    xml = sub_once(
        r"<meta content='YOUR DESCRIPTION HERE' name='description'/>",
        lambda m: f"<meta content='{META_DESCRIPTION}' name='description'/>",
        xml,
        "meta description",
    )
    xml = sub_once(
        r"<meta content='YOUR KEYWORDS HERE' name='keywords'/>",
        lambda m: f"<meta content='{META_KEYWORDS}' name='keywords'/>",
        xml,
        "meta keywords",
    )

    # 3. Placeholder social meta -> commented out, so no junk ships.
    xml = sub_once(
        r"    <!-- Social Media meta tag need customer customization -->\n"
        r"    <meta content='Facebook App ID here' property='fb:app_id'/> ?\n"
        r"    <meta content='Facebook Admin ID here' property='fb:admins'/> ?\n"
        r"    <meta content='@username' name='twitter:site'/>\n"
        r"    <meta content='@username' name='twitter:creator'/> *",
        lambda m: SOCIAL_META_REPLACEMENT,
        xml,
        "placeholder fb/twitter meta commented out",
    )

    # 4. The whole skin.
    xml = sub_once(
        r"<b:skin><!\[CDATA\[.*?\]\]></b:skin>",
        lambda m: "<b:skin><![CDATA[" + skin_css + "]]></b:skin>",
        xml,
        "b:skin CSS replaced",
        flags=re.DOTALL,
    )

    # 5. The standalone <style> block is now folded into the skin, so the
    #    old copy would only re-apply the stock green/navy palette.
    xml = sub_once(
        r"\n<style>\n/\*-------Typography and ShortCodes-------\*/.*?</style>\n",
        lambda m: "\n",
        xml,
        "duplicate typography <style> block removed",
        flags=re.DOTALL,
    )

    # 6. Featured-widget JS referenced identifiers that are never defined,
    #    so the widget threw before rendering. The head declares monthFormat
    #    (12 entries, 0-indexed) and noThumbnail.
    xml = sub_once(
        r"month_format\[parseInt\(w, 10\)\]",
        lambda m: "monthFormat[parseInt(w, 10) - 1]",
        xml,
        "JS: month_format -> monthFormat (with 0-index correction)",
    )
    xml = sub_once(
        r"var k = no_image",
        lambda m: "var k = noThumbnail",
        xml,
        "JS: no_image -> noThumbnail",
    )
    xml = sub_once(
        r'else if \("summary" in b_rc\)',
        lambda m: 'else if ("summary" in e.feed.entry[i])',
        xml,
        "JS: undefined b_rc -> e.feed.entry[i]",
    )

    # 7. The 404 <style> lives outside b:skin, so Blogger never substitutes
    #    $maincolor there -- it shipped as a literal invalid declaration.
    xml = sub_once(
        r"    color:\$maincolor;\n\}\n\.link-404 \{",
        lambda m: "    color:#9d4225;\n}\n.link-404 {",
        xml,
        "404 page: unsubstituted $maincolor -> literal rust",
    )

    # 8. Remaining plain-http asset on an https blog.
    xml = sub_once(
        r"http://3\.bp\.blogspot\.com/-KJs65c4Yuo0",
        lambda m: "https://3.bp.blogspot.com/-KJs65c4Yuo0",
        xml,
        "ad placeholder image -> https",
    )

    # 9. Menu: "Home" pointed at a leftover demo page from the theme's own
    #    documentation, so the first nav item led nowhere useful.
    #    The rest of the menu (Blog > Post/Recipes/Reviews, About Us,
    #    Contact Us) is already correct and is left alone.
    xml = sub_once(
        r"<b:widget-setting name='link-0'>"
        r"https://www\.freakinfood\.com/p/basic-reset-box-sizing-border-box\.html"
        r"</b:widget-setting>",
        lambda m: "<b:widget-setting name='link-0'>"
        "https://www.freakinfood.com/</b:widget-setting>",
        xml,
        "menu: Home -> homepage (was a stray reset-css demo page)",
    )

    # 10. Footer "About" widget: lorem ipsum + a stock photo of a stranger.
    xml = sub_once(
        r"<b:widget id='HTML3' locked='false' title='Masterchef'",
        lambda m: "<b:widget id='HTML3' locked='false' title='About FreakinFood'",
        xml,
        "footer widget title: Masterchef -> About FreakinFood",
    )
    xml = sub_once(
        r"(<b:widget id='HTML3'[^>]*>\s*<b:widget-settings>\s*"
        r"<b:widget-setting name='content'>)<!\[CDATA\[.*?\]\]>"
        r"(</b:widget-setting>)",
        lambda m: m.group(1) + "<![CDATA[" + FOOTER_ABOUT_CONTENT + "]]>" + m.group(2),
        xml,
        "footer widget copy: lorem ipsum + stock photo replaced",
        flags=re.DOTALL,
    )

    # 10b. The footer Tags widget was pinned to the demo's own labels
    #      (Blueberry, Mom's Kitchen, Veg-soup...). Switching to ALL makes it
    #      show whatever labels the blog actually uses, with no guessing.
    xml = sub_once(
        r"<b:widget-setting name='showType'>USER_SELECTED</b:widget-setting>",
        lambda m: "<b:widget-setting name='showType'>ALL</b:widget-setting>",
        xml,
        "footer Tags widget: demo labels -> the blog's real labels",
    )

    # 11. Mobile nav: hamburger panel in place of SelectNav's OS dropdown.
    xml = sub_once(
        r"</body>",
        lambda m: MOBILE_NAV_SCRIPT,
        xml,
        "mobile nav toggle script injected",
    )

    # 12. Layout-editor chrome (only visible inside Blogger's Layout screen).
    for old, new, label in [
        ("#2c3e50!important", "#264224!important", "layout: option bar"),
        ("#34495e !important", "#3d5a39 !important", "layout: locked widget"),
        ("#f8e244 !important", "#eae8e7 !important", "layout: sidebar tint"),
    ]:
        if old in xml:
            xml = xml.replace(old, new)
            print(f"  ok  {label}")

    dst.write_text(xml, encoding="utf-8")
    print(f"\nWrote {dst}  ({len(xml):,} bytes)")
    print("Upload via Blogger -> Theme -> Edit HTML, or Restore from this file.")


if __name__ == "__main__":
    main()
