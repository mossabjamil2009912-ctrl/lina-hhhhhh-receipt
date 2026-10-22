# Use the new tone when the receipt with the "Save" button appears

## What changes
- In «تحويل إلى مشترك», when the receipt with the حفظ / اضافة للمفضلة / مشاركة buttons appears, the app plays your new tone (النغمة_المطلوبة) instead of the current one.
- It plays the moment the receipt appears, just once, as it does now.
- It also works offline in the installed Android app.
- Nothing else changes.

## Technical details
- Upload the mp3 with `lovable-assets` to `src/assets/jaib/tone2.mp3.asset.json` (served from `/__l5e/assets-v1/`, which the service worker already caches at runtime).
- In `src/components/TransferForm.tsx`, switch the `okTone` import to the new pointer. Keep the preload in `useEffect` and the play call in `execute()`.
