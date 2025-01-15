import Appbar from "./components/appbar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Appbar />
        <main className="flex-grow bg-gray-50">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
