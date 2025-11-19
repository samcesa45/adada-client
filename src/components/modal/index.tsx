import { AnimatePresence, motion } from 'motion/react';
import ReactDOM from 'react-dom';
import { useCallback, useEffect } from 'react';
import { Button } from '../ui/buttons';
import CloseIcon from '../svgs/close-icon';
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRoot = document.getElementById('modal-root') || createModalRoot();

  //esc key to close
  const handleEscModal = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscModal);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscModal);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscModal);
    };
  }, [isOpen, handleEscModal]);

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-9999 bg-black/75  flex items-center  justify-center  p-4 overflow-y-auto overflow-x-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative p-6 bg-white shadow-xl max-w-5xl w-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              onClick={onClose}
              className=" text-light-yellow flex justify-end w-full outline-none border-none rounded-none shadow-none"
            >
              <CloseIcon className="text-dark font-bold" />
            </Button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    modalRoot,
  );
}

function createModalRoot() {
  const el = document.createElement('div');
  el.id = 'modal-root';
  document.body.appendChild(el);
  return el;
}
