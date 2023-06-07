import React from "react";
import useFetch from "../hooks/useFetch";
import { Link, Outlet } from "react-router-dom";
function HomePage() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/reviews"
  );

  const reviews = data.data;
  // console.log(reviews);

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error...</p>;
  }
  return (
    <>
      {reviews.map((review) => {
        const { title, rating, body } = review.attributes;
        return (
          <div key={review.id} className="review-card">
            <div className="rating">{rating}</div>
            <h2>{title}</h2>
            <small>console list</small>
            <p>{body.substring(0, 200)}...</p>
            <Link to={`/details/${review.id}`}>Read more</Link>
          </div>
        );
      })}
    </>
  );
}

export default HomePage;
