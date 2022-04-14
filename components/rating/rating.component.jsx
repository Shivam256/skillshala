import Rating from "react-rating";
import { BsStar, BsStarFill, BsHeart } from "react-icons/bs";

const CustomRating = ({ ...props }) => {
  return (
    <Rating
      emptySymbol={<BsStar size={20} className="mr-2 mt-1" color="#FF9800" />}
      fullSymbol={
        <BsStarFill size={20} className="mr-2 mt-1" color="#FF9800" />
      }
      {...props}
    />
  );
};

export default CustomRating;
