# Get the offline Android app ready for PWABuilder

The offline setup is already in the app: the «جيب» icon, the app name, offline login, saving every screen on the phone, and the link file with your new signature. This plan checks it all again and publishes, so PWABuilder sees the latest version.

## Steps
1. Re-check that the icons, the app name «جيب», full screen, portrait mode and right-to-left are all set correctly.
2. Check that every screen, image, font and the tone are saved for offline use, including the new screens (exchange, local transfers, top-up and the rest).
3. Check that login with the fingerprint or password 7735909 works without internet.
4. Publish the app.

## What you do after that (on PWABuilder)
1. Open pwabuilder.com and paste: https://first-look-recreated.lovable.app
2. Click Package for stores, then Android, then Generate.
3. Keep the same package name: app.lovable.first_look_recreated.twa, and keep the same signing key you used before so the link file stays valid.
4. Download the zip, install it on your phone, open it once with internet so it saves everything, then it works fully offline.

## Technical details
- Precache list in vite.config.ts covers dist/client assets; confirm the new route chunks and webp assets are included.
- Confirm /.well-known/assetlinks.json and /manifest.webmanifest are served in production.
