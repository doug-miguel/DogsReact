import React from "react";

const PhotoPost = () => {
  const [token, setToken] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [img, setImg] = React.useState("");

  async function handleSubmit() {
    event.preventDefault();

    const formData = new FormData();
    formData.append('img', img);
    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);
    console.log(formData);

    const fecthApi = await fetch(
      "https://dogsapi.origamid.dev/json/api/photo",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      }
    );
    const response = await fecthApi.json();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        type="text"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        type="text"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />
      <input
        type="text"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />
      <input type="file" onChange={({ target }) => setImg(target.files[0])} />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoPost;
