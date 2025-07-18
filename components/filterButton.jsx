import React from 'react'

const FilterButton = ({options}) => {

  return (
    <div>
       
        <div className="relative inline-block ">
          <select className="appearance-none border border-gray-300 bg-[#E5EDF5] text-black rounded-md p-2 pr-10 w-full focus:outline-none ">
            {options.map((option)=>(
                <option >{option}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
  )
}

export default FilterButton