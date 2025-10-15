import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// 1. Import the external data
import tutorialData from './TutorialsData.jsx'; 

// Helper component to display code with a toggle button (KEEP THIS)
const CodeBlock = ({ title, code, language = 'jsx' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h4>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-md hover:bg-blue-600 transition duration-150"
        >
          {isOpen ? 'Hide Code' : 'Show Code'}
        </button>
      </div>
      
      {isOpen && (
        <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-md overflow-x-auto text-sm">
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      )}
    </div>
  );
};


function Tutorials() {
  const { id } = useParams();

  // 2. Use the imported data to find the current tutorial content
  const currentTutorial = tutorialData[id];

  // 3. Handle cases where the ID is invalid
  if (!currentTutorial) {
    return (
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Tutorial Not Found</h1>
        <p className="text-gray-700 dark:text-gray-300">
          There is no content available for tutorial ID: **{id}**. Please select a valid tutorial from the sidebar.
        </p>
      </div>
    );
  }

  // 4. Render the selected tutorial content and loop through code blocks
  return (
    <div className="ml-64">
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">{currentTutorial.title}</h1>
        
        {/* Render the main content (text, lists, etc.) */}
        <div className="text-lg leading-relaxed mb-6">
          {currentTutorial.content}
        </div>
        
        {/* Render all code blocks using the extracted data */}
        <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white border-t pt-4 mt-6'>Code Examples</h2>
        {currentTutorial.codeBlocks.map((block, index) => (
            <CodeBlock 
                key={index}
                title={block.title}
                code={block.code}
                language={block.language}
            />
        ))}

      </div>
    </div>
  );
}

export default Tutorials;