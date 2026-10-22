# Login and fingerprint screen: softer colors like the real app

## What is different now
- The phone number box, the password box and the «نقطة مبيعات» box are bright white. In the real app they are the same grey as the screen behind them, with a thin soft border only.
- The three contact buttons (free number, service points, customer service) are white. In the real app they are see-through with a thin border.
- When the fingerprint window shows, the real app dims the screen a little behind it. Ours does not dim anything, so it looks too bright.
- In the real app the logo inside the password box is white. Ours is grey.
- The real app has faint Jaib pattern marks at the top behind the logo.

## Changes
1. Background: the same light grey as the home screen and the other screens.
2. Boxes and buttons: no white fill, the same grey as the screen, with thin soft borders. The selected «عميل» tab stays a bit darker, as in your photo.
3. Fingerprint window: a light dim over the screen behind it. The window itself stays light, and the round fingerprint button stays white below it.
4. The loading logo in the password box turns white, with the same one-second spin before the home screen opens.
5. Faint Jaib pattern marks at the top, very light, as in the real app.
6. All text, sizes and places stay as they are now.

## Check
Compare a picture of the preview with your two photos at the same size, fix what is still off, then publish.

## Technical details
- `src/routes/login.tsx`: replace `bg-card` on inputs, tabs and contact buttons with `bg-transparent` plus `border-foreground/15`. Add an overlay `bg-foreground/10` behind the fingerprint sheet while `bio` is open. Use `JaibLoader` without `gray`, and give it a light shadow so it stays visible on grey.
- Pattern: use a low-opacity version of the existing card pattern image at the top, without a new asset if possible.
- Only design tokens are used, so no hard-coded colors.
