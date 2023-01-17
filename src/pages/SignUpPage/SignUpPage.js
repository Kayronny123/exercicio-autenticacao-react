import { useNavigate } from "react-router-dom";
import { FormContainer, InputContainer } from "./styled";
import { goToFeed, goToLogin } from "../../routes/coordinator";

function SignUpPage() {
  const navigate = useNavigate();
  return (
    <main>
      <h1>Cadastro</h1>
      <FormContainer>
        <InputContainer>
          <label htmlFor="username">Nome:</label>
          <input id="username" required />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input id="email" required />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input id="password" required />
        </InputContainer>

        <button onClick={() => goToFeed(navigate)}>Cadastrar</button>
        <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
      </FormContainer>
    </main>
  );
}

export default SignUpPage;
