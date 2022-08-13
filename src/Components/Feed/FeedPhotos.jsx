import React from "react";

import FeedPhotoItem from "./FeedPhotosItem";

import useFetch from "../../Hooks/useFetch";

import Error from "../../Helper/Error";
import Loading from "../../Helper/Loading";

import { PHOTOS_GET } from "../../Api/api";

import style from "./FeedPhotos.module.css";

const FeedPhoto = ({ setModalPhoto, user, page, setInfinit }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhoto() {
      const { url, options } = PHOTOS_GET({ page, total: 6, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < 6) setInfinit(false);
    }
    fetchPhoto();
  }, [request, user, setInfinit, page]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${style.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotoItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhoto;
