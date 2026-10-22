# Fix the receipt logo animation and the amount order

## What's wrong
1. **Amount order:** in the real app the number (25) is on the right and «ريال يمني» is on its left. Ours is the reverse: the currency is first and the number after it.
2. **Logo motion:** on our receipt the logo looks still. In the video, after the receipt appears, a thin red line comes down from above, grows into the tall frame over the bag, then the bars appear inside. Ours plays very fast while the receipt is still sliding up, so by the time it stops moving the animation has already finished and looks static.

## Changes
- Put the number first (on the right) and the currency after it, as in the picture.
- Start the logo animation only once the receipt has fully appeared, and slow it down to match the video:
  - The bag and the dot are shown first.
  - A thin line comes in from above (as in your first picture).
  - The line grows downward into a frame sitting on the bag (second picture).
  - The bars appear inside the frame, ending in the final shape from the receipt screenshot.
- The sound keeps playing as soon as the receipt appears, as it does now.

## Technical details
- `TransferForm.tsx`: swap the two spans in the amount box (amount first in RTL), and mount `JaibReceiptLogo` with a `key` and a short delay (~450ms, after the sheet's slide-up) so the CSS animations start from zero.
- `styles.css`: new timings for `jaib-rc-frame` (thin line → full height, ~1.2s), `jaib-rc-col`/`jaib-rc-bar` after it.
