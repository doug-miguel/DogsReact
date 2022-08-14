import React from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../Context/UserContext";
import Error from "../../Helper/Error";
import style from "./LoginForm.module.css";
import styleBtn from "../Form/Button.module.css";
import Head from "../../Helper/Head";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        {error && <Error error={error} />}
      </form>
      <Link className={style.perdeu} to="/login/perdeu">
        Perdeu a Senha
      </Link>
      <div className={style.cadastro}>
        <h2 className={style.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta ? Cadastre-se no site.</p>
        <Link className={styleBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
