# Make the phone app show the newest version straight away

## What is happening
- The live site already has the newest home screen (tilted side cards, no side gaps). I checked the live files.
- The app on your phone still shows the copy it saved earlier. When a new version is published, the phone downloads it quietly, but keeps showing the old screen until the app is fully closed and opened again, sometimes twice.
- Good news: in your picture the address bar is gone, so the link file now works.

## Fix
1. When the phone finishes downloading a new version, the app reloads itself once, so the new screens show right away without closing it.
2. Each time the app opens with internet, it checks for a newer version, and checks again every time you come back to it.
3. Nothing changes offline: with no internet, the last saved version keeps working as now.

## What you do once
After I publish: open the app with internet, wait a few seconds (it will flash once), and the new home screen will show. You don't need to reinstall it or make a new file in PWABuilder.

## Technical details
- `src/lib/pwa.ts`: after `register("/sw.js")`, listen for `navigator.serviceWorker` `controllerchange` and reload once (sessionStorage guard to avoid loops); call `registration.update()` on load and on `visibilitychange` when visible and online.
- Keep the vite-plugin-pwa setup (`autoUpdate`, `skipWaiting`, `clientsClaim`) unchanged; the preview and iframe guards stay as they are.
- Publish after the change.
