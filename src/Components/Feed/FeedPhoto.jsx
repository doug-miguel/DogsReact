import React from "react";

import FeedPhotoItem from "./FeedPhotoItem";

import useFetch from "../../Hooks/useFetch";

import Error from "../../Helper/Error";
import Loading from "../../Helper/Loading";

import { PHOTO_GET } from "../../Api/api";

import style from "./FeedPhotos.module.css";

const FeedPhoto = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhoto() {
      const { url, options } = PHOTO_GET({ page: 1, total: 7, user: 0 });
      const { response, json } = await request(url, options);
      console.log(
        "🚀 ~ file: FeedPhoto.jsx ~ line 15 ~ fetchPhoto ~ json",
        json
      );
    }
    fetchPhoto();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${style.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotoItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhoto;
