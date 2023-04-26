import star from "../assets/star-spinning.gif";
import hole from "../assets/shadow-energy.gif";
import { Rating as RatingType } from "../types/product";

interface Props {
  rating: RatingType;
  showLabel?: boolean;
}

export default function Rating({ rating, showLabel = true }: Props) {
  return (
    <div className="mt-4">
      {showLabel && (
        <span>
          Reviews: <strong>{rating.count}</strong>
        </span>
      )}
      <div>
        {Array.from({ length: 5 }, (_, index) => (
          <img
            key={index}
            className="inline-block h-10 w-10"
            src={index < Math.round(rating.rate) ? star : hole}
          />
        ))}
      </div>
    </div>
  );
}
