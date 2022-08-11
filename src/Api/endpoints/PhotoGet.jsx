import React from "react";
    
const PhotoGet = () => {
  const [query, setQuery] = React.useState("");

  async function handleSubmit() {
    event.preventDefault();
    const fecthApi = await fetch(
      `https://dogsapi.origamid.dev/json/api/photo/${query}`
    );
    const response = await fecthApi.json();
    console.log(
      "🚀 ~ file: UserPost.jsx ~ line 22 ~ handleSubmit ~ response",
      response
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="?_total=1&_page=1&_user=6"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoGet;
