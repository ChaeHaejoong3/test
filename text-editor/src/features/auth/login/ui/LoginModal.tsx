import ModalOverlay from "@/shared/ui/ModalOverlay";
import { useLoginModalStore } from "../store/useLoginModalStore";
import useLogin from "../hooks/useLogin";

export default function LoginModal() {
  const { isOpen, close } = useLoginModalStore();
  const { form, onChange } = useLogin();

  return (
    <ModalOverlay modalClose={close}>
      <div className="w-5/10 h-7/10 rounded-2xl p-4 bg-white">
        <input
          type="text"
          value={form.userId}
          name="userId"
          onChange={onChange}
          className="border"
        />
        <input
          type="password"
          value={form.password}
          name="password"
          onChange={onChange}
          className="border"
        />
      </div>
    </ModalOverlay>
  );
}
