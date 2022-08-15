import React from "react";

import { COMMENT_POST } from "../../Api";

import { EnviarSvg } from "../../Assets/EnviarSvg";

import Error from "../../Helper/Error";

import useFetch from "../../Hooks/useFetch";

import style from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState("");

  const { request, error } = useFetch();

  const token = window.localStorage.getItem("token");

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, token, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${style.form} ${single ? style.single : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        id="comment"
        className={style.textarea}
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={style.button}>
        <EnviarSvg />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
