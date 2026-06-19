// Shared shell for every "normal" page: renders the Navbar once, then
// whichever child route matched gets dropped into the <Outlet />.
// (The 404 page deliberately skips this layout — see App.jsx.)
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
