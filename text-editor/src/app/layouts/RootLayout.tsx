import { useLoginModalStore } from "@/features/auth/login/store/useLoginModalStore";
import LoginModal from "@/features/auth/login/ui/LoginModal";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  const { isOpen } = useLoginModalStore();

  return (
    <>
      {isOpen && <LoginModal />}
      <Outlet />
    </>
  );
}
