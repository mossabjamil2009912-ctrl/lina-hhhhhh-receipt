# Make the «أخرى» (reports) screen scroll down

## Problem
On the reports screen, swiping up to see the lower part (the three boxes and their forms) doesn't move the page.

## Likely cause (to confirm first)
This screen scrolls as a whole page, while the home screen has its own scroll box. The app-wide rule added to stop sideways sliding (locking both the page and its body sideways, with no bounce) can stop the whole page from scrolling up and down on phones. The bottom bar sitting on top may also catch the swipe.

## Fix
1. Open the reports screen on a phone-size preview, signed in, and confirm what blocks the swipe.
2. Give the reports screen (and other long service screens) their own scroll area that fills the screen above the bottom bar, scrolling up and down only, like the home screen.
3. Keep the sideways lock so nothing slides left or right.
4. Check: swipe up on the reports screen, open «تحديد المبلغ», and reach its «حفظ» button; check one other long screen too.

## Technical details
- `src/routes/service.$id.tsx`: outer wrapper becomes `h-[100dvh] overflow-y-auto overflow-x-hidden overscroll-contain touch-pan-y` (bottom padding stays clear of the bottom bar).
- `src/styles.css`: keep `overflow-x: hidden` on `body` only (not `html`) so the page can still scroll normally.
