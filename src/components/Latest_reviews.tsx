import "@/styles/latest_reviews.scss";
import first_img from "../../public/the_book_of_art.jpg";
import second_img from "../../public/crack_the_code.jpeg";
import third_img from "../../public/lunar_storm.jpeg";
import Image from "next/image";
import Link from "next/link";
export default function LatestReviews() {
  const reviews = [
    {
      id: 1,
      img: first_img,
      title: "The Book of Art",
      author: "Regina Phalange",
      reviewer: "Clark Kent",
      rating: 4.5,
      desc: "A quick brown fox jumps over the lazy dog. lorem ipsum a quick brown fox jumps over the lazy dog. lorem ipsum a quick brown fox jumps over the lazy dog.",
    },
    {
      id: 2,
      img: second_img,
      title: "Crack The Code",
      author: "Patrick C. Harless",
      reviewer: "Bruce Wayne",
      rating: 3.8,
      desc: "A quick brown fox jumps over the lazy dog. lorem ipsum a quick brown fox jumps over the lazy dog. lorem ipsum a quick brown fox jumps over the lazy dog.",
    },
    {
      id: 3,
      img: third_img,
      title: "The Last Empire",
      author: "Terry C.",
      reviewer: "Berry Allen",
      rating: 2.1,
      desc: "A quick brown fox jumps over the lazy dog. lorem ipsum a quick brown fox jumps over the lazy dog. lorem ipsum a quick brown fox jumps over the lazy dog.",
    },
  ];
  return (
    <div className="latest_reviews">
      <div className="latest_reviews_header">
        <h1 className="latest_reviews_title">Latest Reviews</h1>
        <button className="see_more_button">See more...</button>
      </div>
      <div className="reviews">
        {reviews?.map((review) => (
          <div className="review" key={review.id}>
            <div className="img_container">
              <Image src={review.img} alt={review.title} />
            </div>
            <div className="book_info">
              <h1 className="book_title">{review.title}</h1>
              <h3 className="time">30 minutes ago</h3>
              <h3 className="author">{review.author.toUpperCase()}</h3>
              <h3 className="rating">{review.rating} / 5.0</h3>
              <h3 className="reviewer">
                Reviewed by -
                <Link href={`/${review.reviewer}`}>{review.reviewer}</Link>
              </h3>
              <p className="desc">
                {review.desc}
                <span className="see_more"> see more...</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
