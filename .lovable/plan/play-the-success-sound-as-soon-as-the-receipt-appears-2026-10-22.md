## Play the success sound as soon as the receipt appears

Right now the sound plays 2 seconds after the final receipt (the screen with the Save button) shows up. It will now play the moment the receipt appears.

### Changes
- In the transfer screen, remove the extra 2-second wait so the sound plays at the same moment the receipt opens.
- Load the sound ahead of time (when the transfer screen opens) so it doesn't lag on a phone.

### Technical details
- `src/components/TransferForm.tsx` line 83: replace `setTimeout(() => new Audio(okTone.url).play(), 2000)` with an immediate `play()` call in the same step that shows the receipt.
- Create the `Audio` object once when the screen first loads (`preload="auto"`), then reset `currentTime = 0` before each play.
