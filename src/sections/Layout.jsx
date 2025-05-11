// components/Layout.jsx
import Header from "./Header";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="p-4">
        <Outlet /> {/* здесь будут рендериться страницы */}
      </main>
    </>
  );
};

export default Layout;
