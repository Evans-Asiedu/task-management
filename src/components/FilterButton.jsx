import React, { useState } from 'react'
import Button from './ui/Button'
import useOutsideClick from 'src/hooks/useOutsideClick';
import Dropdown from './ui/Dropdown';
import { data } from "src/data";

const FilterButton = () => {
  console.log('hi')
  const [isOpen, setIsOpen] = useState(false);
  const notifRef = useOutsideClick(() => setIsOpen(false));
  const categories = [...new Set(data.tasks.map(task => task.category))];
  console.log(categories)
  return (
    <div className='relative'>
      <Button
        icon="fa-filter"
        className="text-secondary-500 border-n-1 text-xs font-semibold [&>i]:text-secondary-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        Category
      </Button>
      <Dropdown ref={notifRef} isOpen={isOpen} width='250px'>
        <div>
          {categories.map((category) => (
            <div
              key={category.id}
              className="px-4 py-2 hover:bg-n-1 cursor-pointer flex items-start justify-between"
            >
              {category}
            </div>
          ))}
        </div>

      </Dropdown>
    </div>
  )
}

export default FilterButton
