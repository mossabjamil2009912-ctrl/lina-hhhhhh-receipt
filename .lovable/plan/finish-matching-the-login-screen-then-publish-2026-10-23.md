# Finish matching the login screen, then publish

The latest changes (larger text, empty password box, larger icons) are done in the preview but not published yet. The remaining differences from your photo:

1. The words under the three bottom buttons are close together. Spread the buttons apart a little, like the photo.
2. «رقم الموبايل» sits too close to the selected box. Move it down a little, closer to its own box.
3. The people icon and the small fingerprint are a bit lighter than the photo. Make them darker without a gray box around them.
4. Compare one more screenshot against your photo, then publish.

Note: it can't be checked 100% from a camera photo; a real screenshot from the original app would make the match exact.

## Technical details
- `src/routes/login.tsx` only: contact button x positions, phone label top, icon opacity/darkness via the existing tokens.
