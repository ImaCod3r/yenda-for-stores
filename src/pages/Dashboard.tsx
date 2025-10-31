import { Outlet } from "react-router-dom";
import "../styles/dashboard.css";

// Components
import SideBar from "../components/sideBar";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <SideBar />
            <main className="container">
                <Outlet />
            </main>
        </div>
    )
}