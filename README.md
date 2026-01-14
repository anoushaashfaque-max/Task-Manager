# Task Manager

A modern, lightning-fast task management application built with React and Vite. Features a beautiful glassmorphism design with priority-based task organization and real-time updates.
## Features

### Core Functionality
- **Add Tasks** - Create tasks with custom descriptions
- **Interactive Checkboxes** - Mark tasks as complete/incomplete with visual feedback
- **Delete Tasks** - Remove tasks with smooth animations
- **Priority System** - Organize tasks by Low, Medium, and High priority levels
- **Task Timestamps** - Track when tasks were created

### Design & UX
- **Glassmorphism UI** - Modern frosted glass design with backdrop blur
- **Professional Color Scheme** - Black, blue, and purple gradient theme
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Cubic-bezier transitions and hover effects
- **Custom Favicon** - Professional clipboard icon in browser tab

### Performance
- **Lightning Fast** - Powered by Vite for instant development and builds
- **Hot Module Replacement** - Instant updates during development
- **Optimized Bundle** - Minimal bundle size with tree shaking

## Technologies Used

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** CSS3 with modern features
- **Icons:** React Icons (Material Design)
- **Development:** ESLint, Hot Module Replacement

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd task-manager
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## Usage

### Adding Tasks
1. Type your task in the input field
2. Select priority level (Low/Medium/High)
3. Click "Launch Task" or press Enter

### Managing Tasks
- **Complete Tasks:** Click the checkbox to mark as done
- **Delete Tasks:** Hover over a task and click the delete icon
- **Priority View:** Tasks are color-coded by priority level

### Keyboard Shortcuts
- **Enter** - Add new task quickly
- **Tab** - Navigate between input fields

## Design System

### Color Palette
- **Primary:** `#6366f1` (Blue)
- **Secondary:** `#8b5cf6` (Purple)
- **Accent:** `#06b6d4` (Cyan)
- **Background:** Deep black with radial gradients

### Typography
- **Font Family:** Inter, Segoe UI
- **Weights:** 400, 500, 600, 700, 800
- **Sizes:** Responsive scaling from 14px to 32px

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## Project Structure

```
task-manager/
├── public/
│   ├── task-manager-icon.svg    # Custom favicon
│   └── vite.svg                 # Vite logo (backup)
├── src/
│   ├── Components/
│   │   └── Todo/
│   │       ├── Todo.jsx         # Main component
│   │       └── Todo.css         # Styling
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── package.json                 # Dependencies
└── README.md                    # Documentation
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Features in Detail

### Priority Management
Tasks are organized with a three-tier priority system:
- 🔴 **High Priority** - Critical tasks (Red theme)
- 🟡 **Medium Priority** - Important tasks (Yellow theme)
- 🟢 **Low Priority** - Optional tasks (Green theme)

### Modern UI Elements
- **Glassmorphism Cards** - Semi-transparent task containers
- **Gradient Buttons** - Multi-color gradient effects
- **Shadow System** - Layered shadows for depth
- **Smooth Transitions** - Professional animations

## Acknowledgments

- **Vite** - For the lightning-fast build tool
- **React** - For the powerful frontend framework
- **React Icons** - For the beautiful icon library
- **Design Inspiration** - Modern UI/UX trends and glassmorphism

