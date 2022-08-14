import React from "react";

import Input from "../Form/Input";
import Button from "../Form/Button";

import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";

import { PASSWORD_LOST } from "../../Api/api";

import Error from "../../Helper/Error";
import Head from "../../Helper/Head";

const LoginPasswordLost = () => {
  const login = useForm();
  const { request, data, loading, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      await request(url, options);
    }
  }
  return (
    <section>
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha ?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="Login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
