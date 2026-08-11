# FreakinFood — Blogger theme

Rebrands the SoraTemplates **Fooddy 2.0** Blogger theme to the FreakinFood
design system from `../index.html` and the Figma-to-Framer guide.

## Files

| File | What it is |
|---|---|
| `skin.css` | The full `<b:skin>` stylesheet, rebranded. The thing you edit. |
| `apply-branding.py` | Splices `skin.css` + head changes into a theme XML. |
| `preview.html` / `preview.css` | Static preview — check changes here before publishing. |

## Applying it

1. Blogger → **Theme → ⋮ → Backup**, save the download as `original.xml` here.
2. Run:

```bash
python3 apply-branding.py original.xml freakinfood-theme.xml
```

3. Blogger → **Theme → ⋮ → Restore** → upload `freakinfood-theme.xml`.

The script only touches the head links, the meta placeholders, the `<b:skin>`
block, and four broken identifiers in the inline JS. The minified jQuery
plugins and the packed "Theme Functions" blob are copied through byte-for-byte,
so related posts and the timeago stamps keep working.

Every replacement is asserted — if the source theme differs from what the
patterns expect, the script stops with an error instead of writing a
half-branded file.

## Previewing changes

After editing `skin.css`, rebuild the preview stylesheet (it resolves the
`$variable` references Blogger would substitute server-side):

```bash
python3 -c "import re;c=open('skin.css').read();v=dict(re.findall(r'<Variable name=\"(\w+)\"[^>]*?value=\"([^\"]*)\"',c));v['bodybackground']='#fbf9f8';[c:=c.replace('\$'+k,v[k]) for k in sorted(v,key=len,reverse=True)];open('preview.css','w').write(c)"
```

Then open `preview.html`.

## Tokens

Set as Blogger theme variables, so they're editable in **Theme → Customise**
without touching CSS.

| Variable | Value | Role |
|---|---|---|
| `maindarkcolor` | `#264224` | Forest green — headings, primary buttons |
| `greenmid` | `#3d5a39` | Gradient partner |
| `maincolor` | `#9d4225` | Rust — accents, links on hover, active states |
| `bodybackground` | `#fbf9f8` | Page |
| `surfacealt` | `#f6f3f2` | Footer, inputs |
| `surfacecard` | `#ffffff` | Cards, widgets |
| `bordersoft` | `#eae8e7` | Hairlines |
| `bodytext` | `#434840` | Body copy |
| `textdark` | `#1b1c1c` | Wordmark, high-contrast text |
| `sagemuted` | `#c3c8bd` | Dividers, muted icons |

Type: **Newsreader** ExtraLight Italic for headings and post titles,
**Be Vietnam Pro** for body and nav, **Inter** uppercase for eyebrows,
labels, buttons and meta. Radii 8 / 12 / 6px (card / block / button).

## Menu

Items live in the `LinkList210` widget settings in the theme XML (Blogger →
Layout → Main Menu to edit them live). Current set:

```
Home                      /
Blog                      /
  _Post                   /search/label/Post
  _Recipes                /search/label/Recipes
  _Reviews                /search/label/Reviews
About Us                  /p/about-us.html
Contact Us                /p/contact-us.html
```

The leading `_` is the theme's convention for a sub-item.

**Contact Us renders as a button.** The CSS hooks on the href
(`a[href*='contact']`), not on position or label, so it keeps working if you
reorder the menu or rename it to just "Contact". If you ever add a *second*
contact link it would also get the treatment — narrow the selector then.

### Mobile nav

The stock theme hides the menu below 880px and swaps in a native `<select>`
built by SelectNav.js — an OS picker wheel in the middle of an editorial
layout, with the Contact CTA demoted to list item seven.

That's replaced with a hamburger and a slide-down panel: links at 16px, Blog's
sub-items nested and always expanded (no second tap to reach Recipes), and the
Contact button keeps its treatment at the bottom.

SelectNav still runs and still builds its `<select>` — the CSS just never shows
it. Nothing was removed from the vendor JS, including the packed blob.

- CSS lives in `skin.css` under `######## Mobile navigation`
- The toggle is `MOBILE_NAV_SCRIPT` in `apply-branding.py`, injected before
  `</body>`. Closes on outside click and on Escape; sets `aria-expanded`.

## Tagline

**Fish sauce, olive oil, Nordic light**

Names all three cuisines through their signature ingredients rather than
listing countries, and echoes the hero copy in `index.html` ("the delicate
balance of dill, fish sauce, and summer light").

This is a **Blogger setting, not part of the theme** — set it at
Settings → Basic → Description. The theme renders it under the wordmark as
uppercase Inter 12px at 2.4px tracking.

Measured at that size it is 311px wide, so it holds one line down to a 375px
viewport (360px available). Anything much past ~35 characters starts wrapping
on phones — worth re-measuring in `preview.html` if you change it.

## Placeholder content

Fixed by the script:

- Footer "Masterchef" widget → "About FreakinFood", with real copy replacing
  the lorem ipsum and a stock photo of a stranger. The portrait markup is kept
  but commented out — paste an image URL and uncomment to re-enable.
- Footer Tags widget was pinned to the demo's labels (Blueberry, Mom's
  Kitchen, Veg-soup…). Now shows the blog's actual labels.
- Menu "Home" pointed at a leftover reset-css demo page.

**Still yours to do** — these need real values I don't have:

| Where | What |
|---|---|
| Settings → Basic | Set the description to the tagline above |
| `<head>` | Social meta block, commented out (shipped literal `@username`) |
| Sidebar "Follow Us" | All four social buttons are `href="#"` |
| Footer social widget | All four links are `#` |
| Top social widget | No links configured at all |
| Header widget | Points at a Blogger-hosted image; swap for the FreakinFood logo |
| `PageList1` | Still references `http://freakin-food.blogspot.com` — old domain, plain http |
| Ad widget | Stock `ad728.gif` placeholder |
