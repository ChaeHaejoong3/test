import { Outlet } from "react-router-dom";
import Nav from "@/widgets/layouts/Nav";

export default function AppLayout() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Nav />
      <main className="px-layout">
        <Outlet />
      </main>
    </div>
  );
}
