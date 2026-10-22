# Stop the home screen from sliding sideways

## Cause
The part of the home screen that scrolls up and down also lets you slide it left and right, because the side cards and the ads stick out past the screen edge. So a sideways swipe moves the whole screen, as in your picture.

## Fix
1. The home screen only scrolls up and down. A sideways swipe never moves it.
2. A sideways swipe still works where it should: the currency cards and the ad strip.
3. The whole app is locked sideways on every screen too, so it never shifts or bounces.

## Technical details
- `src/routes/index.tsx`: add `overflowX: "hidden"` to the vertical scroll container, and `touch-action: pan-y` on it (the card and banner areas keep their own pointer handlers).
- `src/styles.css`: `html, body { overflow-x: hidden; overscroll-behavior: none; }`.
- Check with Playwright: swipe sideways on the nine boxes, and the scroll position stays at 0. Then publish.
