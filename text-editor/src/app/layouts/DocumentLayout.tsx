import { Outlet } from "react-router-dom";
import Nav from "../../widgets/layouts/Nav";

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
