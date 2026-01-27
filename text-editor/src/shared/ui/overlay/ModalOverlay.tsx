import { FaXmark } from "react-icons/fa6";
import useCloseOnEsc from "../../hooks/useCloseOnEsc";
import Overlay from "./Overlay";

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
    <Overlay>
      <button
        onClick={modalClose}
        className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
      >
        <FaXmark />
      </button>

      {children}
    </Overlay>
  );
}
