import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Sidebar(){

  const tutorials = [
    {id: 1 , name: "Setting Up"},
    {id: 2 , name: "Components"},
    {id: 3 , name: "Routing"},
  ]

  const location = useLocation();

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md h-screen fixed left-0 top-0 p-6">
      <h1 className='text-2xl font-bold mb-6 text-gray-900 dark:text-white'>Tutorial Portal</h1>
      <nav className='flex flex-col space-y-3'>
        <Link 
              to="/"
              className={`transition font-medium ${
                location.pathname === "/"
                ? "text-blue-600"
                : "text-gray-700 dark:gray-300 hover:text-blue-300"
              }`}
        >
        Home
        </Link>
        <h2 className='text-sm text-gray-300 uppercase mt-4 mb-2 tracking-wider'>Tutorials</h2>
        
        {tutorials.map((tutorial) =>(
           <Link
                key={tutorial.id}
                to={`/tutorials/${tutorial.id}`}
                className={`transition font-medium block py-1 rounded-md px-2 ${
                  location.pathname === `/tutorials/${tutorial.id}`
                  ? "bg-blue-100 text-blue-600 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 hover:dark:bg-gray-700"
                }`}
        >
          {tutorial.name}
        </Link>
        ))}
       
      </nav>
    </aside>
  )
}
export default Sidebar;




