interface IntegerInputProps {
  id: string;
  value: number;
  onChange: (value: number) => void;
  className?: string;
  children: React.ReactNode;
}

export default function Input({ id, value, onChange, className, children, ...props }: IntegerInputProps) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const isValidInteger = /^-?\d*$/.test(inputValue);

    if (isValidInteger) {
      onChange(parseInt(inputValue, 10) || 0);
    }
  };
  
  return (
    <div className={`mt-2 flex flex-col ${className}`}>
      <label htmlFor={id}>
        <strong>{children}</strong>
      </label>
      <input
        type="text"
        id={id}
        value={value.toString()}
        onChange={handleChange}
        inputMode="numeric"
        pattern="-?\d*"
        {...props}
        className='rounded-sm border border-gray-500 px-5 py-2'
      />
    </div>
  );
}
