import { useLoginModalStore } from "@/features/auth/login/store/useLoginModalStore";
import OrangeButton from "@/shared/ui/button/OrangeButton";
import { Link } from "react-router-dom";

export default function Nav() {
  const open = useLoginModalStore((state) => state.open);

  return (
    <div className="h-20 border-b px-layout border-gray-100 flex place-items-center select-none">
      <Link to={"/"}>
        <div className="flex place-items-center cursor-pointer">
          <img src="/imgs/logo.png" className="h-8" />
          <p className="text-xl ml-2">해중.com</p>
        </div>
      </Link>
      <div className="flex-1" />
      <OrangeButton onClick={open}>로그인</OrangeButton>
    </div>
  );
}
