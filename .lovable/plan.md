# Login and fingerprint screen: softer colors like the real app

## Changes
1. Background: the same light grey as the home screen and the other screens.
2. Boxes and buttons: the phone box, the password box, «نقطة مبيعات» and the three contact buttons get no white or tinted fill. They show the screen's grey with a thin soft border. The selected «عميل» tab stays a bit darker.
3. Fingerprint window: a light dim over the screen behind it. The window itself stays light, and the round fingerprint button stays white below it.
4. The loading logo in the password box turns white, with a light shadow. It still spins for one second before the home screen opens.
5. Faint Jaib pattern marks at the top behind the logo, very light. They replace the dot pattern added last time.
6. All text, sizes and places stay as they are now.

## Check
Take a picture of the preview at phone size, compare it with your two photos, fix what is still off, then publish.

## Technical details
- `src/routes/login.tsx`: the phone/password boxes use `bg-transparent` with `border-foreground/15` instead of `bg-login-field`. Remove the `mix-blend-multiply` effect from the contact images if it makes them look white, or wrap them in transparent bordered boxes. Change the sheet overlay to `bg-foreground/10`. Use `JaibLoader` in white (no `gray` prop) with a drop shadow.
- Pattern: reuse an existing Jaib mark/pattern asset from `src/assets/jaib` at very low opacity at the top, with no new asset. Remove the dot gradient layer.
- Remove the unused `--login-field` token. Keep the `--login-tab` and `--login-sheet` tokens.
