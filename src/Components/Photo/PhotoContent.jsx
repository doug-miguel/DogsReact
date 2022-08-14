import React from "react";

import { Link } from "react-router-dom";

import { UserContext } from "../../Context/UserContext";
import Image from "../../Helper/Image";

import PhotoComments from "./PhotoComments";

import style from "./PhotoContent.module.css";
import PhotoDelete from "./PhotoDelete";

const PhotoContent = ({ data, single }) => {
  const user = React.useContext(UserContext);

  const { photo, comments } = data;

  return (
    <div className={`${style.photo} ${single ? style.single : ""}`}>
      <div className={style.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={style.details}>
        <div>
          <p className={style.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={style.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={style.attributes}>
            <li>{photo.peso} Kg</li>
            <li>{`${photo.idade} ${photo.idade > 2 ? "Anos" : "Ano"}`}</li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={photo.id} commentPhoto={comments} />
    </div>
  );
};

export default PhotoContent;
