import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiShoppingBag,
  FiBox,
  FiStar,
  FiSettings,
  FiX,
  FiLogOut
} from "react-icons/fi";

export default function SideBar() {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(!open);

  return (
    <>
      <button className="menu-toggle" onClick={toggleSidebar}>
        {open ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-logo">Logo</h2>
        </div>

        <nav className="sidebar-menu">
          <Link to="/dashboard/pedidos">
            <FiShoppingBag /> <span>Pedidos</span>
          </Link>

          <Link to="/dashboard/produtos">
            <FiBox /> <span>Produtos</span>
          </Link>
          <Link to="/dashboard/avaliacoes">
            <FiStar /> <span>Avaliações</span>
          </Link>
          <Link to="/dashboard/configuracoes">
            <FiSettings /> <span>Configurações</span>
          </Link>
          <Link to="/logout">
            <FiLogOut /> <span>Sair</span>
          </Link>
        </nav>

        <div className="sidebar-footer">
          
        </div>
      </aside>
    </>
  );
};

