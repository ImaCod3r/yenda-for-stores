import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} >
            <Route path='pedidos' element={<p>Pedidos</p>} />
            <Route path='produtos' element={<p>Produtos</p>} />
            <Route path='avaliacoes' element={<p>Avaliacoes</p>} />
            <Route path='configuracoes' element={<p>Configuracoes</p>} />
          </Route>
        </Routes>
      </Router>
  )
}

export default App