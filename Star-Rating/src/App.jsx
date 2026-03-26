import React, { useState } from "react";

const App = () => {
  const [userRating, setUserRating] = useState(0);

  const ratingArr = [1, 2, 3, 4, 5];

  const handleRatingClick = (rating) => {
    setUserRating(rating);
  };

  return (
    <>
      <h1>Star Rating Component</h1>
      <div className="ratingCard">
        {ratingArr.map((rating) => (
          <div
            key={rating}
            className={`rating ${userRating === rating ? "selected" : ""}`}
            onClick={() => handleRatingClick(rating)}
          >
            {rating}
          </div>
        ))}
      </div>
      <p>You rated: {userRating}</p>
    </>
  );
};

export default App;