interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, children, ...rest }: Props) {
  return (
    <button
      className={`mt-2 rounded-sm bg-blue-600 text-white p-2 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
