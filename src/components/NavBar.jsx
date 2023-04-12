import React from 'react'

function NavBar() {
  return (
    <div className='flex items-center justify-between m-6'>
        <div className='flex items-center gap-6'>
           <img src="https://i.pinimg.com/736x/b1/06/b3/b106b356085297efb35b87ef9122e03a.jpg" alt="logo" className='w-20' /> 
           <img src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png" alt="pokemon-logo" className='w-[13em]' /> 
           <img src="https://i.pinimg.com/736x/b1/06/b3/b106b356085297efb35b87ef9122e03a.jpg" alt="logo" className='w-20' /> 
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <input
            className="flex h-14 w-full rounded-xl border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
            type="text"
            placeholder="Search Pokemon"
          />
          <button className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-1 bg-indigo-600 focus:ring-indigo-400 focus:ring-offset-1 dark:hover:bg-indigo-700 dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-indigo-400 disabled:pointer-events-none dark:focus:ring-offset-gray-900 dark:bg-indigo-600 text-white hover:bg-indigo-700 h-14 py-2 px-4">
            Search
          </button>
        </div>
    </div>
  )
}

export default NavBar;