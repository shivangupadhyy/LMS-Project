
# LMS Project — Frontend

This repository contains the frontend for a small Learning Management System (LMS) built with React and Vite.

Key features
- Student pages: browse courses, view course details, search, and a video player.
- Educator pages: dashboard, add course, view my courses, and view enrolled students (nested routes).
- Tailwind CSS for styling, Clerk scaffold for auth, and small UI components (CourseCard, SearchBar, Hero, Rating, etc.).

Tech stack
- React + Vite
- Tailwind CSS
- React Router (nested routes)
- Clerk (auth integration scaffold)
- Quill (rich text), react-youtube (video), rc-progress (progress UI)

Quick start
1. Open a terminal and go to the frontend folder:

```powershell
cd "d:\LMS Project\frontend"
npm install
npm run dev
```

2. Open the URL printed by Vite (usually http://localhost:5173).

Env / setup
- The app expects a Clerk publishable key in an environment variable `VITE_CLERK_PUBLISHABLE_KEY` (used in `src/main.jsx`). Add it to a `.env` file in the `frontend` folder if you use Clerk locally.

Project structure (important files)
- `src/main.jsx` — app bootstrap: `BrowserRouter`, `ClerkProvider`, `AppContextProvider`.
- `src/App.jsx` — route definitions (student routes + nested `/educator` routes).
- `src/context/AppContext.jsx` — global context provider scaffold.
- `src/index.css` — Tailwind directives + global font.
- `tailwind.config.js` — Tailwind configuration (custom font sizes defined here).
- `src/components/` — reusable UI components (Hero, SearchBar, CourseCard, Rating, etc.).
- `src/pages/` — student and educator pages.

Notes & tips
- If you update `tailwind.config.js`, restart the Vite dev server so Tailwind rebuilds the CSS.
- `AppContext.jsx` previously had a recursive render issue — it should return `<AppContext.Provider value={...}>{children}</AppContext.Provider>`.
- To wire the app to a backend, add API calls in the page components (CourseList, CourseDetails, AddCourse, etc.).

Next recommended steps
- Wire a backend API to fetch/store courses and enrollments.
- Add validation for `AddCourse` and error handling for network calls.
- Add tests for critical components.

License & attribution
Add a license file if you plan to publish this project.
