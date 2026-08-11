#!/usr/bin/env python3
"""
Generate copy-paste blocks for Blogger, derived from skin.css and
apply-branding.py so the two routes can't drift apart.

    python3 make-paste-blocks.py

Writes into paste/. Use these if you'd rather hand-edit in Blogger than run
apply-branding.py against a theme backup.
"""

import importlib.util
from pathlib import Path

HERE = Path(__file__).parent
OUT = HERE / "paste"

spec = importlib.util.spec_from_file_location("ab", HERE / "apply-branding.py")
ab = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ab)

OUT.mkdir(exist_ok=True)
written = []


def write(name, text):
    (OUT / name).write_text(text, encoding="utf-8")
    written.append((name, len(text)))


# 1. The whole skin element. Replaces everything from <b:skin> to </b:skin>.
write(
    "1-skin-block.xml",
    "<b:skin><![CDATA[" + (HERE / "skin.css").read_text(encoding="utf-8") + "]]></b:skin>",
)

# 2. Head font links.
write("2-head-fonts.xml", ab.FONT_LINK + "\n")

# 3. Mobile nav toggle. MOBILE_NAV_SCRIPT carries the closing </body>.
write("3-mobile-nav-script.xml", ab.MOBILE_NAV_SCRIPT.replace("</body>", "").rstrip() + "\n")

# 4. Footer widget body -- paste via Layout, no XML editing needed.
write("4-footer-about-widget.html", ab.FOOTER_ABOUT_CONTENT + "\n")

# 5. Head meta.
write(
    "5-head-meta.xml",
    "<meta content='{}' name='description'/>\n"
    "<meta content='{}' name='keywords'/>\n".format(
        ab.META_DESCRIPTION, ab.META_KEYWORDS
    ),
)

print("Wrote:")
for name, size in written:
    print(f"  paste/{name}  ({size:,} bytes)")
print("\nSee paste/PASTE-GUIDE.md for where each one goes.")
