# Task Management App - Building the wheel

This repository demonstrates my learning journey with React frontend development. It's a simple web application (WAP) frontend interface powered by React that performs basic task management operations.

## Thinking Process

I chose to use functional components to construct the app for several reasons:
- **Modern approach**: Functional components are the current standard in React development
- **Simpler syntax**: No need for `this` binding, making the code cleaner and easier to understand
- **Hooks for state management**: React Hooks provide a powerful way to manage state and side effects

I implemented `useReducer` to manage and update tasks, which allowed me to:
- Handle different action cases for task status changes, task creation, and initial data fetching
- Centralize state management logic in a single reducer function
- Realize the power and flexibility of `useReducer` for complex state updates

Another important learning was the use of `e.preventDefault()` in form handling. This is a standard approach in React that prevents the default HTML form submission behavior, allowing us to manage and handle forms programmatically without the page reloading and losing state.


## Data Flow

The application follows a unidirectional data flow pattern:

1. **Initial Data Loading**: On mount, `TaskTable` fetches the first 5 tasks from the API and transforms them into the application's task format.

2. **State Management**: Tasks are managed via `useReducer` with three actions: `task/add`, `task/toggleStatus`, and `task/setInitial`.

3. **User Interactions**: Actions trigger `dispatch` calls that update state through the reducer, flowing down to child components like `CreateTask` via props and callback functions.

4. **Conditional Rendering**: The `showForm` state controls `CreateTask` component visibility.

## Key Learnings

This project helped me understand several fundamental React concepts:

- **React Hooks**: Learned to use `useState` for simple state management and `useReducer` for complex state logic with multiple action types
- **Controlled Components**: Implemented form inputs as controlled components where React manages the form data through state, ensuring the UI always reflects the current state
- **API Integration**: Learned to fetch data from external APIs using the `fetch` API, transform the data to match the application's data structure, and handle it with `useEffect`

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/g7xu/Task-Management-APP.git
cd Task-Management-APP
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## File Structure

```
Task-Management-APP/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow for deployment
├── public/
│   └── vite.svg                # Public assets
├── src/
│   ├── App.jsx                 # Root component
│   ├── App.css                 # App-specific styles
│   ├── TaskTable.jsx           # Main TaskTable component with state management
│   ├── CreateTask.jsx          # Form component for creating new tasks
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.ts              # Vite configuration
├── package.json                # Project dependencies and scripts
└── README.md                   # This file
```