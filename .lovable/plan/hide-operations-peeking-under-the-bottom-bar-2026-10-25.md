# Hide operations peeking under the bottom bar

## Problem
On the home screen, a thin strip under the bottom bar is see-through, so the operations rows (date like 24/10/2026) show below the bar while scrolling.

## Fix
- Fill the strip under the bottom bar with the same white as the bar, all the way to the screen edge, so nothing shows beneath it.
- Check with a phone-size picture after scrolling the operations list.

## Technical details
- `src/routes/index.tsx`: the nav wrapper (height 1920-1686) only shows `nav.webp` up to 1890; add `bg-card` to the wrapper (and extend to the safe-area bottom) so the 1890-1920 gap is opaque.
