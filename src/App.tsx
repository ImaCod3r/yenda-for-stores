import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Products from './pages/Products';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} >
            <Route path='pedidos' element={<Orders />} />
            <Route path='produtos' element={<Products />} />
            <Route path='avaliacoes' element={<p>Avaliacoes</p>} />
            <Route path='configuracoes' element={<p>Configuracoes</p>} />
          </Route>
        </Routes>
      </Router>
  )
}

export default App;