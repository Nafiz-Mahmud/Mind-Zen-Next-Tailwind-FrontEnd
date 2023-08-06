"use client";
import "../../../styles/user_profile.scss";
import Image from "next/image";
import ben from "../../../../public/benn.jpg";
import Link from "next/link";

import DeleteUser from "@/components/deleteUser/DeleteUser";
import { reviews } from "@/db";
import { useState } from "react";
import RenderReviews from "@/components/RenderReviews";
export default function UserProfile() {
  const user = {
    id: 1,
    img: ben,
    name: "Bruce Wayne",
    email: "brucewayne@gmail.com",
    reviews: 2,
  };

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
        <RenderReviews reviews={reviews.slice(0, 2)} />
      </div>
      {isDeleteUser && <DeleteUser setIsDeleteUser={setIsDeleteUser} />}
    </div>
  );
}
