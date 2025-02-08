import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function  Modal  ({ isOpen, onClose, header, body, footer, customStyles })  {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`bg-white p-6 rounded-2xl shadow-xl  ${customStyles ? 'sm:w-[70%] -[90%]' : 'w-full max-w-md'}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="text-xl font-semibold flex-grow">{header}</div>
              <button
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                onClick={onClose}
              >
                <X size={20} />
              </button>
            </div>
            <div className="mb-4">{body}</div>
            <div className="mt-4">{footer}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

