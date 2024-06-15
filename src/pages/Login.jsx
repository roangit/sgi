import { useState, useContext } from "react";

//importando contexto
import { AuthContext } from "../contexts/AuthContext";

//importando estilo e logo
import "../pages/styles/Login.css";
import Logo from "../../src/assets/imagens/Logo_320.png";

const Login = () => {
  const { autenticado, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", {email, password});
    login(email, password);
  };

  return (   
    <div className="container-geral">
      <div className="container-login">
        <div className="wrap-login">

        <form className="login-form" onSubmit={handleSubmit}>
            <span className="login-form-title"> Bem vindo </span>
            <p>{String(autenticado)}</p>
                        

            <span className="login-form-title">
              <img src={Logo} alt="Jovem Programador" />
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>


            <div className="container-login-form-btn">
              <button className="login-form-btn" type="submit">Entrar</button>
            </div> 
          
            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <a className="txt2" href="/">
                Criar conta
              </a>
            </div>
          
          </form>
        </div>
      </div>
    </div>     
  )
}

export default Login