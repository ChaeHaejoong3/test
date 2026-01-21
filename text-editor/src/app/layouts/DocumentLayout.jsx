import { Outlet } from "react-router-dom";
import Nav from "../shell/Nav";

export default function DocumentLayout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
