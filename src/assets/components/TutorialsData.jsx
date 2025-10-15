import React from 'react';

// Define the content for each tutorial, keyed by its ID
const tutorialData = {
  '1': {
    title: 'Tutorial 1: Setting Up a React Project 🛠️',
    content: (
      <>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          The first step is setting up your development environment. We recommend using **Vite** for a fast and modern setup.
        </p>
        
        {/* The CodeBlock component will be passed down and used in Tutorials.jsx */}
        {/* (The CodeBlock component will be defined in Tutorials.jsx) */}
        {/* Placeholder for CodeBlock 1 */}
        {/* This structure assumes you will pass a CodeBlock component later */}
        <p className="text-sm italic text-gray-500 dark:text-gray-400">
            [Code Block 1: Vite Project Setup Commands]
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Steps:</h3>
        <ol className="list-decimal list-inside pl-4 space-y-2 text-gray-600 dark:text-gray-400">
          <li>Open your terminal.</li>
          <li>Run the command to create the app.</li>
          <li>Navigate into your new project folder.</li>
          <li>Install dependencies.</li>
          <li>Start the development server.</li>
        </ol>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          You're now ready to start coding!
        </p>
      </>
    ),
    codeBlocks: [
        {
            title: "Vite Project Setup Commands",
            code: `npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev`,
            language: "bash",
        },
    ]
  },
  '2': {
    title: 'Tutorial 2: Understanding Components 🧱',
    content: (
      <>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          **Components** are the building blocks of any React application. They are independent, reusable pieces of code.
        </p>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Example Component:</h3>
        <p className="text-gray-700 dark:text-gray-300">
          This component accepts a `name` via props and displays it.
        </p>
        
        {/* Placeholder for CodeBlock 2 */}
        <p className="text-sm italic text-gray-500 dark:text-gray-400">
            [Code Block 2: MyButton.jsx Component]
        </p>

        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Remember: A component must be named with an **initial capital letter**.
        </p>
      </>
    ),
    codeBlocks: [
        {
            title: "MyButton.jsx Component",
            code: `import React from 'react';

function MyButton({ name }) {
  return (
    <button className="p-2 bg-green-500 text-white rounded">
      Click me, {name}!
    </button>
  );
}

export default MyButton;`,
            language: "jsx",
        },
    ]
  },
  '3': {
    title: 'Tutorial 3: Client-Side Routing with React Router 🧭',
    content: (
      <>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          **React Router** allows your application to handle navigation without a full page reload, providing a Single Page Application (SPA) experience.
        </p>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">How to Define a Route:</h3>
        
        {/* Placeholder for CodeBlock 3 */}
        <p className="text-sm italic text-gray-500 dark:text-gray-400">
            [Code Block 3: Defining the Route in App.jsx]
        </p>
        
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">How to Get Route Parameters:</h3>
        
        {/* Placeholder for CodeBlock 4 */}
        <p className="text-sm italic text-gray-500 dark:text-gray-400">
            [Code Block 4: Getting Parameters in Tutorials.jsx]
        </p>

        <p className="mt-4 text-gray-700 dark:text-gray-300">
          The path **`/tutorials/:id`** means the colon (`:`) marks a dynamic segment named `id`.
        </p>
      </>
    ),
    codeBlocks: [
        {
            title: "Defining the Route in App.jsx",
            code: `// App.jsx excerpt
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/tutorials/:id" element={<Tutorials />} />
</Routes>`,
            language: "jsx",
        },
        {
            title: "Getting Parameters in Tutorials.jsx",
            code: `// Tutorials.jsx excerpt
import { useParams } from 'react-router-dom';

function Tutorials() {
  const { id } = useParams();
  // id will be '1', '2', or '3' based on the URL
  // ...
}`,
            language: "jsx",
        },
    ]
  },
};

export default tutorialData;