# Make the receipt tone play without internet

## Why it fails now
The tone is loaded from an online link, not stored inside the app. The phone only saves it after playing it with internet, and phones load sounds in small parts that the offline storage does not save properly. So with no internet, the tone is missing.

## What changes
- Put the tone file inside the app itself, so it is saved with the screens and pictures the first time the app opens.
- Keep playing it from memory right when the receipt appears, as now.
- Nothing else changes.

## Technical details
- Copy the tone2.mp3 bytes into `src/assets/jaib/tone2.mp3` and import it as a regular Vite asset in `TransferForm.tsx` (replace the `.asset.json` pointer). `globPatterns` already includes `mp3`, so it is precached.
- For robustness, fetch the precached file once into a Blob URL on mount and play from that (avoids Range-request cache misses offline).
- After publishing: open the app once with internet, then test offline.
