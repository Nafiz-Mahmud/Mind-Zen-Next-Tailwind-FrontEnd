import Link from "next/link";
import Image from "next/image";
import { ReviewProps } from "@/types/globalTypes";
export default function RenderReviews({ reviews }: { reviews: ReviewProps[] }) {
  return (
    <div className="reviews">
      {reviews?.map((review: ReviewProps) => (
        <div className="review" key={review.id}>
          <div className="img_container">
            <Link href={`/reviews/${review.id}`}>
              <Image src={review.img} alt={review.title} />
            </Link>
          </div>
          <div className="book_info">
            <h1 className="book_title">
              <Link href={`/reviews/${review.id}`}>{review.title}</Link>
            </h1>
            <h3 className="time">30 minutes ago</h3>
            <h3 className="author">{review.author.toUpperCase()}</h3>
            <h3 className="rating">{review.rating} / 5.0</h3>
            <h3 className="reviewer">
              Reviewed by -
              <Link href={`/profiles/${review.id}`}>{review.reviewer}</Link>
            </h3>
            <p className="desc">
              {review.desc}
              <span className="see_more">
                <Link href={`/reviews/${review.id}`}> see more...</Link>
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
