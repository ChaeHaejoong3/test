import { FaXmark } from "react-icons/fa6";

type ModalOverlayProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function ModalOverlay({ children, onClose }: ModalOverlayProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl"
      >
        <FaXmark />
      </button>

      {children}
    </div>
  );
}
