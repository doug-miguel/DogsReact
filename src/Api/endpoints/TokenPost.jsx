import React from "react";

const TokenPost = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");

  async function handleSubmit() {
    event.preventDefault();
    const fecthApi = await fetch(
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      }
    );
    const response = await fecthApi.json();
    setToken(response.token);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userName}
        onChange={({ target }) => setUserName(target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      {token && <p style={{ wordBreak: "break-all" }}>{token}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default TokenPost;
