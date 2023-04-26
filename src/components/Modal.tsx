import React, { useEffect, useRef } from 'react';

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ children, open, setOpen }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.focus();
    }
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  return (
    
      <dialog
        ref={dialogRef}
        className='fixed w-full h-full inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4'
        style={{ display: open ? 'block' : 'none' }}
        role='dialog'
        aria-modal='true'
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        onClick={handleClose}
      >
        <div 
        onClick={(e) => e.stopPropagation()}
        className='relative mx-auto my-8 flex w-full max-w-md flex-col items-center justify-center rounded bg-white p-8 shadow-lg'>
          {children}
          <button
            className='absolute right-0 top-0 mr-4 mt-4 text-lg text-gray-400 focus:text-gray-800 focus:outline-none'
            onClick={handleClose}
            aria-label='Close modal'
          >
            &times;
          </button>
        </div>
      </dialog>
  );
};

export default Modal;
