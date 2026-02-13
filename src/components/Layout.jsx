import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import "../styles/Layout.css";

export default function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
}