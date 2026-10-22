# Repeat the receipt logo motion until the screen closes

## What changes
- The Jaib logo on the transfer receipt keeps repeating its motion for as long as the receipt is open:
  1. The dot turns inside the bag.
  2. A thin red line comes down from above and grows into the frame over the bag.
  3. The bars appear inside the frame.
  4. A short pause on the final shape, then the logo goes back to the bag only and the motion starts again.
- The first round starts after the receipt has fully appeared, as now.
- The motion stops when you close the receipt or leave the screen.
- The sound stays as it is: it plays once when the receipt appears and does not repeat.
- The saved receipt image keeps the final full-logo shape.

## Technical details
- `styles.css`: rewrite `jaib-rc-dot`, `jaib-rc-frame`, `jaib-rc-col` and `jaib-rc-bar` as a single ~4s cycle each (same timeline written as percentages) with `animation-iteration-count: infinite`, keeping the 0.45s start delay.
- `JaibMark.tsx`: move the bar delays into the shared cycle percentages.
- While the receipt is being saved as an image, add a class that pauses the motion on the full logo.
