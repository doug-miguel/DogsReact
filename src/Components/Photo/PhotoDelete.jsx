import React from "react";

import style from "./PhotoDelete.module.css";

import useFetch from "../../Hooks/useFetch";
import { PHOTO_DELETE } from "../../Api/api";
import { useNavigate } from "react-router-dom";

const PhotoDelete = ({ id }) => {
  const token = window.localStorage.getItem("token");
  const { request, loading } = useFetch();
  const navigate = useNavigate();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar ?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);
      if (response.ok) navigate("/");
    }
  }

  return (
    <>
      {loading ? (
        <button className={style.delete} disabled>
          Deletar
        </button>
      ) : (
        <button className={style.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
