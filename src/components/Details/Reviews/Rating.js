import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {IoPaw} from "react-icons/all";

class Rating extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextVal, prevVal, name) {
    this.setState({rating: nextVal});
  }

  render() {
    const {rating} = this.state;

    return(
        <>
          <StarRatingComponent
            name={"userRating"}
            starColor={"#7986e6"}
            emptyStarColor={"#b0b0b0"}
            value={rating}
            renderStarIcon={() => <IoPaw size={'2em'}/>}
            onStarClick={this.onStarClick.bind(this)}
          />
        </>
    )
  }
}

export default Rating;