import "../styles/orders.css";

export default function Orders() {
  return (
    <div className="orders-container">
      <h1>Pedidos</h1>
      <hr />
      <div className="cards">
        <div className="card">
            <h3>0</h3>
            <p>Pedidos de hoje</p>
        </div>
        <div className="card">
            <h3>0</h3>
            <p>Total de pedidos</p>
        </div>
        <div className="card">
            <h3>0</h3>
            <p>Pedidos em andamento</p>
        </div>
        <div className="card">
            <h3>0</h3>
            <p>Pedidos entregues</p>
        </div>
        <div className="card">
            <h3>0</h3>
            <p>Cancelados</p>
        </div>
      </div>
    </div>
  );
}