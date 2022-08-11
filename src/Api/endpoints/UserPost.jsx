import React from "react";

const UserPost = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  async function handleSubmit() {
    event.preventDefault();
    const fecthApi = await fetch("https://dogsapi.origamid.dev/json/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: password,
        email: email,
      }),
    });
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
        value={userName}
        onChange={({ target }) => setUserName(target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default UserPost;
