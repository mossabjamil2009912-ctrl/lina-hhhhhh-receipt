## Match the installed app to the real Jaib app (screenshots 10:46)

Here are the differences I found between our app (Chrome screenshot) and the real Jaib app, and how each one gets fixed.

### Home screen
1. **Empty margins:** our screen is shrunk, with blank space at the top and sides. The real app fills the full phone width, the title starts higher, and the cards and boxes touch closer to the edges. Fix: fit the screen to the phone's width instead of shrinking it to fit the height. The bottom bar always stays at the very bottom of the screen.
2. **Greeting:** the real app says "صباح الخير" in the morning. Ours always says "مساء الخير". Fix: show "صباح الخير" before 12 noon and "مساء الخير" after, based on the phone's clock.
3. **Shown balance:** when you tap the eye in the real app, the amount appears large and bold (like 10,685.08) and the icon becomes an open eye. Ours shows a small number and keeps the crossed-out eye. Fix: show a large bold amount and an open eye. When hidden, keep the small dots and the crossed-out eye.
4. **Side cards:** in the real app, the dark side cards are tilted more, cut off at the screen edges, and always show dots (●●●●●), never the amount. Ours shows the dollar amount and sits flatter. Fix: more tilt, cut off at the edges like the real one, and always dots on the side cards.
5. **"اسحب للأسفل للتحديث":** the real one is a bit bigger and has a double-arrow icon next to it. Fix: match its size and icon.

### App icon on the home screen
6. In your icon screenshot, the top icon is the real one, with a smaller logo and white space around it. Ours (bottom) has a logo too big that almost touches the edges. That's because Android uses a special "fill" version of the icon. Fix: shrink the logo in that version so it ends up the exact same size as the real icon. You'll need to make the Android file again in PWABuilder and reinstall.

### Technical details
- `src/routes/index.tsx`: zoom = `innerWidth / W`; root height = `innerHeight / zoom`; place nav/FAB relative to the bottom (`bottom` offset instead of `top`); scroll area fills the rest. Greeting uses `new Date().getHours() < 12`.
- Cards: center visible amount `text-[27px] font-extrabold`; eye icon swaps to an `Eye` glyph drawn in primary-foreground over the card's eye area. Side cards: rotateY ~40deg, translate farther so they're cut by the viewport, and always render `●●●●●`.
- Icons: regenerate `maskable-192/512.png` with the logo scaled to ~78% inside a white canvas (logo width ≈ 54% of the canvas), so after Android's mask it matches the real icon (logo ≈ 69% of the visible squircle).
