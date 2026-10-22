# Make the new screens match the video exactly

## How
Put each new screen side by side with its frame from the video, at the same size, and fix every difference (size, spacing, font size, colour, position of each word and icon) until they match:

1. تحويل بين حساباتي (مصارفة)
2. حوالات شبكات محلية
3. إرسال حوالة عبر شبكات محلية (list of networks)
4. استلام حوالة عبر شبكات محلية
5. حالة حوالة شبكة محلية / الغاء حوالة
6. شحن الرصيد (8 operators)
7. Credit forms (سبافون رصيد، You رصيد، واي…)
8. Package forms (سبافون فئات، You، You فوترة)

## Differences already found
- The amount in words says «مائتان», but the video writes «مئتان وثلاثة وسبعون ريال يمني». I'll fix the spelling (this also affects the transfer screen, which uses the same wording).
- In the video, the rates table on the exchange screen is empty with a small red loading mark while it loads. Ours shows the prices immediately. I'll show the loading mark briefly, then the prices.
- Header, card and button heights and spacing will be checked one by one against the video frames.

## When done
I'll send you a side-by-side picture of each screen next to the video so you can see the result.

## Technical details
- Playwright at 390px vs. video frames scaled 648→390, overlay diff per screen; adjust Tailwind px values in `MoreScreens.tsx` and the menu layout in `service.$id.tsx`.
- `transfer.ts` `hundreds[2]` → «مئتان»; update the transfer test if it asserts that word.
