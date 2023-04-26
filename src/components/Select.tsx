import { useState } from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
  label: string;
  items: string[];
  selectedItem: string;
  setSelectedItem: (size: string) => void;
}

export default function Select({
  items,
  label,
  selectedItem,
  setSelectedItem,
  className,
  ...rest
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const selectItem = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative mt-2" {...rest}>
      <label>
        <strong>{label}</strong>
      </label>
      <div
        className="rounded-sm border border-gray-500 px-5 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem}
      </div>
      {isOpen && (
        <div className="absolute left-0 w-full rounded-sm border border-gray-500 bg-white">
          <ul>
            {items.map((item) => (
              <li
                className="px-5 py-2 hover:bg-blue-300"
                key={item}
                onClick={() => selectItem(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
