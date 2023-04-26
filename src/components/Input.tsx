interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Button({ className, children, ...rest }: Props) {
  return (
    <div className={`mt-2 flex flex-col ${className}`}>
      <label>
        <strong>{children}</strong>
      </label>
      <input
        type="text"
        className="rounded-sm border border-gray-500 px-5 py-2"
        {...rest}
      />
    </div>
  );
}
