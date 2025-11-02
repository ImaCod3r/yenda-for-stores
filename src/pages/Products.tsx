import "../styles/products.css";
import { BiPlusCircle } from "react-icons/bi";

export default function Products() {
  return (
    <div className="products-container">
      <h1>Produtos</h1>
      <hr />
      <div className="cards">
        <div className="card">
            <h3>0</h3>
            <p>Produtos cadastrados</p>
        </div>
      </div>

      <button className="add-product-button">
        <BiPlusCircle /> 
        Adicionar Produto
      </button>

      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5}>Nenhum produto encontrado.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}