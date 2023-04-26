import Button from "./Button";

interface Props {
  children: React.ReactNode;
  setOpen: (open: boolean) => void;
}

export default function Modal({ children, setOpen }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="flex max-w-2xl flex-col items-center bg-white p-4">
        {children}
        <Button onClick={() => setOpen(false)}>Close</Button>
      </div>
    </div>
  );
}
