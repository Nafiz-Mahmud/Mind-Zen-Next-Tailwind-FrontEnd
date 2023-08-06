import "@/styles/latest_reviews.scss";
import { reviews } from "@/db";
import RenderReviews from "./RenderReviews";
export default function LatestReviews() {
  return (
    <div className="latest_reviews">
      <div className="latest_reviews_header">
        <h1 className="latest_reviews_title">Latest Reviews</h1>
        <button className="see_more_button">See more...</button>
      </div>
      <RenderReviews reviews={reviews} />
    </div>
  );
}
