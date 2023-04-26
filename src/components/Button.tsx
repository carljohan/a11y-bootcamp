interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, children, ...rest }: Props) {
  return (
    <button
      className={`mt-2 rounded-sm bg-blue-500 p-2 text-gray-300 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
