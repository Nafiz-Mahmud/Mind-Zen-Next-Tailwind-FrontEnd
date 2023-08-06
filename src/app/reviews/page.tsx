import "../../styles/reviews_page.scss";
import RenderReviews from "@/components/RenderReviews";
import { reviews } from "@/db";
export default function Reviews() {
  return (
    <div className="reviews_page">
      <h1 className="title">All Reviews</h1>
      <RenderReviews reviews={reviews} />
    </div>
  );
}
