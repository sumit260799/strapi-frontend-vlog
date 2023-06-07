import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

function ReviewDetails() {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/reviews/" + id
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error 😣</p>;

  console.log(data.data.attributes.title);
  return (
    <div className="review-card">
      <div className="rating">{data.data.attributes.rating}</div>
      <h2>{data.data.attributes.title}</h2>

      <small>console list</small>
      <p>{data.data.attributes.body}</p>
    </div>
  );
}

export default ReviewDetails;
