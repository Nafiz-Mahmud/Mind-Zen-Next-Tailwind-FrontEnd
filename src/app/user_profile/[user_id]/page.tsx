"use client";
import "../../../styles/user_profile.scss";
import Image from "next/image";
import ben from "../../../../public/benn.jpg";
import Link from "next/link";
import first_img from "../../../../public/the_book_of_art.jpg";
import second_img from "../../../../public/crack_the_code.jpeg";
import third_img from "../../../../public/lunar_storm.jpeg";
import DeleteUser from "@/components/deleteUser/DeleteUser";
import { useState } from "react";

export default function UserProfile() {
  const user = {
    id: 1,
    img: ben,
    name: "Bruce Wayne",
    email: "brucewayne@gmail.com",
    reviews: 3,
  };
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
      title: "Lunar Storm",
      author: "Terry C.",
      reviewer: "Berry Allen",
      rating: 2.1,
      desc: "A quick brown fox jumps over the lazy dog. lorem ipsum a quick brown fox jumps over the lazy dog. lorem ipsum a quick brown fox jumps over the lazy dog.",
    },
  ];
  const [isDeleteUser, setIsDeleteUser] = useState(false);
  return (
    <div className="user_profile">
      <div className="profile_header">
        <div className="img_container">
          <Image src={user.img} alt={user.name} />
        </div>
        <div className="profile_info">
          <h1 className="name">{user.name}</h1>
          <h1 className="email">{user.email}</h1>
          <h1 className="time">Created 3 days ago</h1>
        </div>
      </div>
      <div className="profile_reviews">
        <div className="num_reviews_edit_delete">
          <h1>{user.reviews} Reviews</h1>
          <div className="edit_delete_profile">
            <button>Edit Profile</button>
            <button onClick={() => setIsDeleteUser((c) => !c)}>
              Delete Profile
            </button>
          </div>
        </div>
        <div className="reviews">
          {reviews?.map((review) => (
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
      </div>
      {isDeleteUser && <DeleteUser setIsDeleteUser={setIsDeleteUser} />}
    </div>
  );
}
