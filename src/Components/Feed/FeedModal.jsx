import React from "react";
import { PHOTO_GET } from "../../Api";
import Error from "../../Helper/Error";
import Loading from "../../Helper/Loading";
import useFetch from "../../Hooks/useFetch";
import PhotoContent from "../Photo/PhotoContent";

import style from "./FeedModal.module.css";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function FetchModal() {
      const { url, options } = PHOTO_GET(photo.id);
      request(url, options);
    }
    FetchModal();
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }
  return (
    <div className={style.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
