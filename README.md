# NextTask

NextTask is a productivity web app built with Next.js that helps users track their YouTube playlist progress and manage to-dos with priorities and drag-and-drop features.

## Features

- YouTube playlist tracker with video checklist and progress bar  
- To-do system with priority management and drag-and-drop (DnD)  
- Clean and customizable UI using [shadcn/ui](https://ui.shadcn.com/) and Tailwind CSS  
- Built with Next.js App Router for modern routing and layouts

## Tech Stack

- Next.js (React 19+) with App Router  
- shadcn/ui component library  
- Tailwind CSS for styling  
- React hooks for state management  
- Drag and drop library (e.g., `react-beautiful-dnd` or `dnd-kit`)

## Installation

1. Clone the repo:  
   ```bash
   git clone https://github.com/yourusername/nexttask.git
   cd nexttask
````

2. Install dependencies (use `--legacy-peer-deps` if you get peer dependency warnings):

   ```bash
   npm install --legacy-peer-deps
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to see the app.

## Usage

* Navigate to `/playlist` to track YouTube playlist progress.
* Go to `/dashboard` for the to-do list with priority and drag-and-drop features.

## Notes

* shadcn/ui may have peer dependency issues with React 19; use `--legacy-peer-deps` to install dependencies safely.
* Feel free to customize UI components in `app/components` and styles in `styles/`.

## License

MIT © Md Junayed




