# Add the missing screens from the new video

The video shows screens that don't exist in our app yet. Each one will be cut from the video frames and laid out to match it.

## From «تحويلات مالية»
1. **تحويل بين حساباتي (مصارفة)** — from-account and to-account (each with a currency list and an eye icon), the red swap button in the middle, «المبلغ بالعملة الأجنبية» = «المبلغ المخصوم», the rate table (العملة / نبيع بسعر / نشتري بسعر), notes and «استمرار». Moving money between your own currencies changes your balances.
2. **حوالات شبكات محلية** — a list of 4 items with a «تحديث» button:
   - **إرسال حوالة عبر شبكات محلية** → a list of 11 networks (حزمي، حوالات جيب، دادية، الامتياز، النجم، الحوشبي، الهتار، المميز، الأكوع، اليمنية…).
   - **استلام حوالة عبر شبكات محلية** → the red warning, «رقم الحوالة», «بحث عن حوالة» and the grid of network logos.
   - **حالة حوالة شبكة محلية** → «رقم الحوالة» + «بحث عن حوالة».
   - **الغاء حوالة شبكة محلية** → same layout as status.

## From «الشحن والسداد»
3. **شحن الرصيد** — a list of 8: يمن موبايل، سبافون رصيد، سبافون فئات، You رصيد، You، You فوترة، واي فوري، واي رصيد.
4. **Operator forms:**
   - **Credit (سبافون رصيد / You رصيد…):** mobile number with the heart and contacts icons, amount, notes, «استمرار».
   - **Packages (سبافون فئات / You / You فوترة):** a «فئة السداد» list that fills in the amount automatically and shows it in words (e.g. «مئتان وثلاثة وسبعون ريال يمني»), then mobile, notes, «استمرار».
   - «استمرار» deducts the amount from your Yemeni rial balance, rejects it if the balance is too low, shows the loading logo then a success message, and adds it to «العمليات».

## Things I'll guess unless you tell me
- The video doesn't show what happens after «استمرار» in the top-up forms, or after «بحث عن حوالة». I'll use the same loading and success messages as purchases, and for a remittance search show «لا توجد حوالة بهذا الرقم».
- The package prices other than 410 and 273 (22.5 وحدة) aren't visible. I'll add a few example packages; send me the real list if you want it exact.

## Technical details
- Reuse `service.$id.tsx` menus for the new list screens (new ids: `exchange`, `localnet`, `ln-send`, `ln-receive`, `ln-status`, `ln-cancel`, `recharge`, `op-<name>`), wired via `to`.
- New components: `ExchangeForm.tsx`, `RemitSearch.tsx`, `RechargeForm.tsx`; logos cropped from the video frames into `src/assets/jaib/*.webp`.
- Balance changes go through `wallet.ts`/`transfer.ts` `deduct` and `ops.ts`; small tests for the exchange math and the top-up deduction.
