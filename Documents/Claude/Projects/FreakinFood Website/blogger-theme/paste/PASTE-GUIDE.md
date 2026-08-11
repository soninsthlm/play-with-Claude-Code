# Adding this to Blogger

Two routes. **The script is safer** — it's one command and it verifies every
change. Hand-pasting is fine too, it's just more steps.

Back up first either way: **Theme → ⋮ → Backup**.

---

## Route A — the script (recommended)

1. **Theme → ⋮ → Backup**, save the `.xml`.
2. From the `blogger-theme/` folder:

```bash
python3 apply-branding.py ~/Downloads/theme.xml freakinfood-theme.xml
```

3. **Theme → ⋮ → Restore** → upload `freakinfood-theme.xml`.

It prints a line per change and stops with an error if anything doesn't match,
so you never get a half-branded file. It also leaves the minified jQuery
plugins and the packed vendor blob byte-for-byte untouched.

---

## Route B — paste by hand

**Theme → Customise → Edit HTML.** Click into the editor, then `Ctrl/Cmd + F`
to find each anchor.

### 1. The stylesheet — `1-skin-block.xml`

This is the whole rebrand; the rest is small stuff.

Find `<b:skin>`. Select from `<b:skin>` all the way through `]]></b:skin>`
(it's long — thousands of lines) and replace with the file's contents.

> Tip: collapse the block using the editor's fold arrow in the line gutter,
> then select the single folded line. Much easier than dragging.

### 2. Fonts — `2-head-fonts.xml`

Find `fonts.googleapis.com`. Replace that one `<link ...>` line with the file's
three lines. This also moves the request off plain `http`, which https blogs
block as mixed content.

### 3. Meta — `5-head-meta.xml`

Find `YOUR DESCRIPTION HERE`, replace that line and the `YOUR KEYWORDS HERE`
line below it.

While you're there, find `Facebook App ID here` and delete those four `<meta>`
lines — they ship literal placeholder text to Facebook and X as real values.

### 4. Mobile nav — `3-mobile-nav-script.xml`

Find `</body>` (near the very bottom) and paste the file's contents
**directly above** it.

### 5. Footer widget — `4-footer-about-widget.html`

Easiest outside the HTML editor:

**Layout → Footer Widget (A) → the "Masterchef" widget → Edit**

- Title: `About FreakinFood`
- Content: paste the file's contents
- Save

### 6. Small fixes worth doing while you're in there

| Find | Change to |
|---|---|
| `basic-reset-box-sizing-border-box.html` | `https://www.freakinfood.com/` — the "Home" menu link points at a leftover demo page |
| `USER_SELECTED` | `ALL` — footer Tags widget is pinned to the demo's labels (Blueberry, Mom's Kitchen…) |
| `month_format[parseInt(w, 10)]` | `monthFormat[parseInt(w, 10) - 1]` — undefined variable; breaks the featured widget |
| `var k = no_image` | `var k = noThumbnail` — same bug |
| `"summary" in b_rc` | `"summary" in e.feed.entry[i]` — same bug |
| `color:$maincolor;` (in the 404 block) | `color:#9d4225;` — `$variables` aren't substituted outside `<b:skin>` |

---

## After either route

- **Settings → Basic → Description**: `Fish sauce, olive oil, Nordic light`
- Preview before saving. Blogger's preview catches XML errors — if it complains
  about a parse error, something got clipped mid-paste; restore the backup and
  retry that block.
