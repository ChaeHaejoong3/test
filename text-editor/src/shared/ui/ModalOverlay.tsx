import { useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import useCloseOnEsc from "../hooks/useCloseOnEsc";

type ModalOverlayProps = {
  children: React.ReactNode;
  modalClose: () => void;
};

export default function ModalOverlay({
  children,
  modalClose,
}: ModalOverlayProps) {
  useCloseOnEsc(modalClose);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <button
        onClick={modalClose}
        className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
      >
        <FaXmark />
      </button>

      {children}
    </div>
  );
}
