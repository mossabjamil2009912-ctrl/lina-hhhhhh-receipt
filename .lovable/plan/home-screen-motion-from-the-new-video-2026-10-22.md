## Home screen motion from the new video

In the video, the home screen has three behaviors our app doesn't have yet.

### 1. Rotating ads banner
- The red ad strip under the cards changes by itself about every 2.5 seconds. It slides sideways to the next ad, in this order: "ابدأ الادخار مع حصالة جيب" → "وقت الحساب مع اصحابك" → "كروت الشبكات صارت في الجيب" → "شاركهم الفرحة مع هدية" → back to the first.
- You can also swipe it by hand.
- The 3 new ad images will be cut cleanly from your video.

### 2. Home page scrolls up
- The top part ("صباح الخير / سفيان" with the bell and face icons) stays fixed. Everything below (cards, ad, services, operations) scrolls up smoothly under it, just like the video.
- The bottom bar and the round button stay fixed.

### 3. "العمليات" list under the services
- Shows your real latest operations, newest first. Each row has the icon, "تحويل مشترك" (or the operation name), the date and time like [09:43] 22/10/2026, and the amount: red with a minus for money out (-50 ريال يمني), green for money in (100 ريال يمني).
- Up to 5 rows, then the link "عرض أخر العمليات".
- Every transfer, purchase, and added amount (from التقارير) is recorded here automatically.
- Tapping a row gives the small grey press effect seen in the video.

### Technical details
- `src/lib/wallet.ts`: add `jaib-ops` localStorage list `{type, title, amount, cur, sign, date}` and `addOp()`/`useOps()`; call it from `TransferForm`, `PurchaseForm`, and `ReportsTools` deposit.
- `src/routes/index.tsx`: split into a fixed header plus a scroll container (`overflow-y-auto`, hidden scrollbar, momentum). Banner becomes a carousel: translateX track, `setInterval` 2500ms, transition .5s ease, pointer swipe, pause while dragging.
- Crop banners b1–b3 from video frames at full resolution, saved as WebP in `src/assets/jaib/`, matching the existing banner box size.
- Add a test for `addOp` ordering and sign.
