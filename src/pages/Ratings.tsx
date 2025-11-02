import '../styles/ratings.css';

export default function Ratings() {
    return (
        <div className="ratings-container">
            <h1>Avaliações</h1>
            <hr />

            <div className="cards">
                <div className="card">
                    <h3>0</h3>
                    <p>Avaliações recebidas</p>
                </div>
                <div className="card">
                    <h3>0,0</h3>
                    <p>Média de avaliações</p>
                </div>
                <div className="card">
                    <h3>Bom</h3>
                    <p>Percepção do cliente</p>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Cliente</th>
                        <th>Comentário</th>
                        <th>Avaliação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={5}>Nenhuma avaliação encontrada.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}