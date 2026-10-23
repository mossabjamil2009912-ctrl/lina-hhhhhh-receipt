# مطابقة شاشة الدخول (بدون نافذة البصمة) مع الصورة

I compared your photo with the current screen at the same phone width. These differences remain:

1. **Text size:** all the writing is smaller than in the photo. I'll enlarge it by about 25%: «مرحبًا بعودتك», «قم بتسجيل الدخول», «عميل», «نقطة مبيعات», the number, «كلمة المرور», the hint line, «نسيت كلمة المرور؟», the red button, «دخول بدون نت», «إنشاء حساب», and the words under the three buttons.
2. **«رقم الموبايل»:** in the photo it sits above the box, separate from it and slightly to the right, not on top of its border.
3. **Password box:** in the photo it shows «كلمة المرور» only, with no dots. The dots will appear only when you start typing.
4. **The small fingerprint:** larger and darker, like the photo.
5. **The red button:** a deeper, slightly darker red, with larger white writing.
6. **The «دخول بدون نت» box:** larger, with a thicker, darker border.
7. **The three bottom buttons:** larger squares with a darker border.
8. **The people icon next to the number:** larger, gray instead of red.

After the changes I'll take a screenshot, compare it with your photo again, then publish.

## Technical details
- Changes only in `src/routes/login.tsx`: text sizes, label position, an empty password field by default (value "" with a placeholder instead of the fixed value), icon sizes and border shades from the existing color tokens.
- Note: the password field would start empty, so you type the password each time. Tell me if you'd rather keep it filled in.
