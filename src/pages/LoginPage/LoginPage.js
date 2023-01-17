import { useNavigate } from "react-router-dom";
import { FormContainer, InputContainer } from "./styled.js";
import { goToFeed, goToSignUp } from "../../routes/coordinator";
import login from "../../api/login.js";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <main>
      <h1>Login</h1>
      <FormContainer>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input id="email" required />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input id="password" required />
        </InputContainer>
        <button
          onClick={() => {
            goToFeed(navigate);
          }}
        >
          Entrar
        </button>
        <button onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      </FormContainer>
      <button onClick={login}>Login2</button>
    </main>
  );
}

export default LoginPage;
