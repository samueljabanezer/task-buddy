# TaskBuddy — Build a Task Management App with ReactJS (Thiranex Task 2)

TaskBuddy is a responsive React.js Task Management web application built following the [Job Ready CoderZ TaskBuddy Tutorial](https://www.youtube.com/watch?v=Q4aB0IgKYx0) and extended with full CRUD, search/filtering, and optional Express + Socket.IO real-time backend support.

## Key Features
- **Add Tasks (`TaskForm.jsx`)**: Create tasks with custom priority (`High`, `Medium`, `Low`) and category (`General`, `Work`, `Personal`).
- **Manage & Update Tasks (`TaskList.jsx`)**: Toggle task status between `Complete` and `Undo` (with strikethrough styling) or `Delete` individual tasks.
- **Visual Progress Tracker (`ProgressTracker.jsx`)**: Automatically calculates completed vs. total tasks (`X out of Y tasks completed`) and animates a percentage progress bar.
- **Persistent Storage**: Automatically saves and loads the `tasks` array in `localStorage`.
- **One-Click Reset**: Conditional `Clear All Tasks` button appears whenever at least one task exists.

## How to Run Locally

```bash
npm install
npm run dev
```
