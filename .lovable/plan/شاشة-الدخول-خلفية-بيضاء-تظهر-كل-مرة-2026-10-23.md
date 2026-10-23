# شاشة الدخول: خلفية بيضاء + تظهر كل مرة

1. خلفية شاشة تسجيل الدخول تصبح بيضاء (بدل الرمادي)، وباقي الشاشة كما هي.
2. شاشة الدخول تظهر في كل مرة تخرج من التطبيق وترجع إليه.

## Technical
- login.tsx: wrappers `bg-background` -> `bg-card` (white token); drop `mix-blend-multiply` effect check stays fine on white.
- Auth flag: store "jaib-auth" in sessionStorage instead of localStorage (login.tsx set, index.tsx and service.$id.tsx guards), and remove any old localStorage value on start. Closing the app clears it, so login shows on every reopen. Data stays in localStorage untouched.
- Also clear the flag when the app goes to background for more than ~30s (visibilitychange), since Android often keeps the app alive instead of closing it.
