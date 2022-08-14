import React from "react";
import { useParams } from "react-router-dom";
import { PHOTOS_GET_ONE } from "../../Api/api";
import Error from "../../Helper/Error";
import Loading from "../../Helper/Loading";
import useFetch from "../../Hooks/useFetch";
import PhotoContent from "./PhotoContent";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url } = PHOTOS_GET_ONE(id);
    const { response } = request(url);
    console.log(
      "🚀 ~ file: Photo.jsx ~ line 13 ~ React.useEffect ~ response",
      response
    );
  }, [request, id]);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent single={true} data={data} />
      </section>
    );
  else null;
};

export default Photo;
