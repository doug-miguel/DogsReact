import React from "react";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";

import style from "./UserPhotoPost.module.css";

import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";

import { PHOTO_POST } from "../../Api/api";
import Error from "../../Helper/Error";
import { useNavigate } from "react-router-dom";

const UserPhotoPost = () => {
  const name = useForm();
  const idade = useForm("number");
  const peso = useForm("number");
  const [img, setImg] = React.useState({});
  const navigate = useNavigate();

  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", name.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    if (token) request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${style.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="name" {...name} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <input
          className={style.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={style.preview}
            style={{ backgroundImage: `url(${img.preview})` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
