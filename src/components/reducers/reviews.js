import posts from './data/reviews.json';

const reviews = (state = posts, action) => {
  switch (action.type) {
    case "fetch-all-reviews":
      return (action.reviews);
    case "helpful-review":
      return state.map((review) => {
        if (review._id === action.review._id) {
          if (review.liked === true) {
            review.liked = false;
            review.stats.helpfuls--;
          } else {
            review.liked = true;
            review.stats.helpfuls++;
          }
          return (review);
        } else {
          return (review);
        }
      });
    case "delete-review":
      return state.filter((review) => review._id !== action.review._id);

    case "create-review":
      const review = {
        _id: new Date().getTime() + "",
        restaurant: "Boston Shawarma",
        userName: "alexas",
        verified: false,
        handle: "Alexa S.",
        ...action.review,
        time: "now",
        profileImage:  "../../public/images/alexa.jpeg",
        stats: {
          ...action.rating,
          helpfuls: 0
        },
      };
      return [review, ...state];
    default:
      return(state);
  }
};

export default reviews;