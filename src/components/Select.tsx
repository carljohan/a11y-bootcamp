import React, { useRef, useState, useEffect, KeyboardEvent } from 'react';

interface SelectProps extends React.HTMLAttributes<HTMLElement> {
  label: string;
  items: string[];
  selectedItem: string;
  setSelectedItem: (size: string) => void;
}

const Select: React.FC<SelectProps> = ({ label, items, selectedItem, setSelectedItem, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (isOpen) {
      listRef.current?.focus();
    }
  }, [isOpen]);

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
    toggleRef.current?.focus();
  };

  const handleListKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      toggleRef.current?.focus();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      const newIndex = (focusedIndex + 1) % items.length;
      setFocusedIndex(newIndex);
      itemRefs.current[newIndex]?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const newIndex = (focusedIndex - 1 + items.length) % items.length;
      setFocusedIndex(newIndex);
      itemRefs.current[newIndex]?.focus();
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (focusedIndex >= 0) {
        handleItemClick(items[focusedIndex]);
      }
    }
  };

  return (
    <div className="relative mt-2 w-full" {...props}>
      <div id="select-label" className='font-bold mr-2'>{label}</div>
      <button
        className="rounded-sm border border-gray-500 px-5 py-2 w-full" 
        ref={toggleRef}
        onClick={handleToggleClick}
        aria-haspopup="listbox"
        aria-labelledby="select-label"
      >
        {selectedItem}
      </button>
      {isOpen && (
        <ul
        className="absolute left-0 w-full rounded-sm border border-gray-500 bg-white"
          ref={listRef}
          tabIndex={-1}
          role="listbox"
          aria-labelledby="select-label"
          onKeyDown={handleListKeyDown}
        >
          {items.map((item, index) => (
            <li
            className="px-5 py-2 hover:bg-blue-300"
              key={item}
              ref={(el) => (itemRefs.current[index] = el)}
              role="option"
              tabIndex={-1}
              aria-selected={item === selectedItem}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;

