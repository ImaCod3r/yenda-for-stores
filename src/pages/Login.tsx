import "../styles/login.css";

// Components
import CustomInput from "../components/customInput";
import { Link } from "react-router-dom";

// icons
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

export default function Login() {
    return (
        <div className="login">
            <img src="https://theacsi.org/wp-content/uploads/2022/01/acsi-supermarket-industry-scaled.jpg" alt="placeholder" />
            <aside>
                <div className="text-wrapper">
                    <h1>Bem-vindo ao Yenda for Stores</h1>
                    <p>Insira as credenciais da sua loja para começar a vender!</p>
                </div>

                <form>
                    <div className="input-group">
                        <CustomInput
                            placeholder="Digite seu e-mail"
                            icon={AiOutlineMail}
                            type="email"
                        />
                    </div>
                    
                    <div className="input-group">
                        <CustomInput
                            placeholder="Digite sua senha"
                            icon={AiOutlineLock}
                            type="password"
                        />
                    </div>

                    <button>Entrar</button>

                    <p>Esqueceste-te das credenciais? <Link to="/suporte">Fale com o suporte.</Link></p>
                </form>
            </aside>
        </div>
    )
}