# Login and fingerprint screen: calmer colors like the real app

Goal: the login screen should have the same soft grey color as the rest of the app, with nothing bright white, matching the two photos.

## Changes (login screen only)
1. **Background**: use exactly the same grey as the home screen, with the faint pattern of small icons behind the logo at the top (as in the photos).
2. **"Customer" / "Sales point" boxes**: the selected box (Customer) gets a darker grey fill. The other box stays see-through with a thin grey border.
3. **Phone and password fields**: a light grey fill a little darker than the background, with thin grey borders. No white.
4. **Small round buttons at the bottom** (toll-free number, service points, customer service): grey with a thin border, the same as in the photo.
5. **Fingerprint pop-up**: an off-white light grey card instead of bright white. The dimming behind it gets a little darker so the screen looks like the photo.
6. **Fingerprint circle**: a soft light grey instead of bright white.
7. The red "Log in as customer" button and the red logo stay as they are.

Nothing else changes: layout, sizes, text and the login check stay the same.

## Technical details
- Add semantic tokens in `src/styles.css`: `--login-field` (slightly darker than `--background`), `--login-tab-active` (mid grey), `--login-sheet` (off-white grey). Register them in `@theme inline`.
- In `src/routes/login.tsx`, replace `bg-card` / `bg-transparent` on the tabs, inputs, bottom buttons, sheet and fingerprint button with the new tokens. Raise the overlay from `bg-foreground/15` to about `/25`.
- Add a faint icon-pattern layer at the top (a low-opacity repeated JaibMark) behind the logo.
