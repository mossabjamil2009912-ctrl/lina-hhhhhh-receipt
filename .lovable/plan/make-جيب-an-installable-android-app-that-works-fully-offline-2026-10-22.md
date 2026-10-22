## Make "جيب" an installable Android app that works fully offline

You will publish the app, paste its link into PWABuilder, and download the Android package. After installing, the app opens with no internet.

### What you get
- **App name:** جيب. It opens full screen with no browser bar, in portrait.
- **Icon:** your icon exactly as sent: the red Jaib logo on a white rounded square with the same size, spacing and red color. I'll rebuild it cleanly at full sharpness in all the sizes Android and PWABuilder need, including the "maskable" version so Android doesn't shrink or crop it.
- **Fully offline:** after the first open, every screen, image, font and the success sound are saved on the phone, so everything works without internet.
- **Login offline:** the password 7735909 is currently checked online. It will be checked on the phone instead (stored scrambled, not as plain text), so login also works offline.
- All your balances, customers and operations already live on the phone, so nothing else changes.
- Updates: when you publish a new version, the app updates itself the next time it opens with internet.

### After I finish, you do this
1. Click Publish.
2. Open pwabuilder.com, paste your published link, choose Android, then Download.

### Technical details
- Add `vite-plugin-pwa` with `generateSW`, `registerType: "autoUpdate"`, `injectRegister: null`, `devOptions.enabled: false`, SW at `/sw.js`. Precache all built JS/CSS/WebP/fonts. Use NetworkFirst for navigations with an offline fallback, exclude `/~oauth`, and add CacheFirst for `/__l5e/assets-v1/` (the sound) and Google Fonts.
- The app currently renders on the server for some routes. Because the app runs offline, configure an SPA shell (prerender `/` shell or `ssr:false` across routes) so the cached HTML boots every route offline.
- Use a single registration wrapper that refuses dev, iframe and preview hosts, and supports `?sw=off`, following the PWA skill rules.
- `public/manifest.webmanifest`: name/short_name "جيب", `lang: ar`, `dir: rtl`, `display: standalone`, `orientation: portrait`, white theme/background, icons 48–512 plus 512 maskable. Add head tags plus apple-touch-icon and replace the favicon.
- Icons are traced from the uploaded image: crop the white squircle, redraw on a clean canvas (no grey phone background), keeping the logo proportions and red `#D3122F`-range color sampled from the image.
- Login: replace the `unlockSite` server call with a local SHA-256 compare in the browser. Remove `gate.functions.ts`.
