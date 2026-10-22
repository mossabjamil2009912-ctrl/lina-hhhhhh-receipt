# Finish the missing screens (my own design, in the same Jaib style)

Every button that does nothing today will open a screen in the same style as the ones from your videos: a white card with the icon on top, Jaib boxes and the red «استمرار» button. Payments take money from your balance, are refused when the balance is too low, show the spinning logo then a success message, and appear in «العمليات».

## تحويلات مالية
- **طلب استلام حوالة / بنوك ومحافظ / واصل:** account, recipient number or account, amount, notes.
- **Each network in «إرسال حوالة عبر شبكات محلية»:** recipient name, number, amount, notes.

## حوالات محلية (شبكة تحويل)
- **إرسال حوالة:** a send form.
- **استلام / حالة / الغاء / طلب استلام:** the same remittance-number search screen.

## الشحن والسداد
- **سداد باقات، الانترنت والهاتف الثابت، يمن فورجي، الماء والكهرباء، التعليم العالي:** a bill form (subscriber or student number, amount, notes).

## Other main screens
- **شراء اونلاين:** كود شراء (amount, then a purchase code is shown) and البطائق الافتراضية (a virtual card with a number).
- **سحب نقدي:** withdrawal request (amount, then a withdrawal code); ATM withdrawal.
- **المدفوعات:** each item opens a payment form.
- **جيبي:** جيب العائلة، هدية، فرقك، ادخار, each a simple form.
- **خدمات ترفيه:** games, apps, internet cards and the recent cards open a list of card values to buy.
- **التقارير (أخرى):**
  - آخر العمليات and كشف حساب show your real operations.
  - بحث مخصص and بحث بالرقم المرجعي search through them.
- **الملف:** the items that say «قريبًا» get simple screens (device info, customer file with your name and number, sharing the app).

## Note
None of these are in your videos or pictures, so I'm designing them myself. Send me a picture or video of any screen and I'll make it match exactly.

## Technical details
- One generic `ServiceForm` driven by a config (fields, icon, operation title, deduct or search) in `src/lib/forms.ts`; new route ids added to `services.ts`/`parentOf` and wired through `to` in the existing menus.
- Reports lists read `useOps()`; a small test for the search-by-reference filter.
