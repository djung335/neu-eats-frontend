const REVIEW_API = "https://neu-eats-backend.herokuapp.com/api/reviews";

export const fetchAllReviews = (dispatch) =>
    fetch(REVIEW_API)
    .then((response) => response.json())
    .then((reviews) =>
        dispatch({
          type: "fetch-all-reviews",
          reviews,
        })
    );

export const postNewReview = (dispatch, newReview) =>
    fetch(REVIEW_API, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
    .then((response) => response.json())
    .then((review) =>
        dispatch({
          type: "create-review",
          review,
        })
    );

export const deleteReview = (dispatch, review) =>
    fetch(`${REVIEW_API}/${review._id}`, {
      method: "DELETE",
    }).then((response) =>
        dispatch({
          type: "delete-review",
          review,
        })
    );

export const helpfulReview = (dispatch, review) =>
    fetch(`${REVIEW_API}/${review._id}/helpfuls`, {
      method: "PUT",
    }).then((response) =>
        dispatch({
          type: "helpful-review",
          review,
        })
    );