import React from "react";
import { useParams } from "react-router-dom";
import { PHOTOS_GET_ONE } from "../../Api/api";
import Error from "../../Helper/Error";
import Head from "../../Helper/Head";
import Loading from "../../Helper/Loading";
import useFetch from "../../Hooks/useFetch";
import PhotoContent from "./PhotoContent";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();
  console.log("🚀 ~ file: Photo.jsx ~ line 13 ~ Photo ~ data", data);

  React.useEffect(() => {
    const { url } = PHOTOS_GET_ONE(id);
    const { response } = request(url);
  }, [request, id]);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data ? data.photo.title : ""} />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else null;
};

export default Photo;
