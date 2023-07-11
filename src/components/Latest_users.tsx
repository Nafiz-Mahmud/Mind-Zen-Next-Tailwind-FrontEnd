import "@/styles/latest_users.scss";
import Image from "next/image";
import Link from "next/link";

import ben from "../../public/benn.jpg";
import henry from "../../public/henry.webp";
import ezra from "../../public/ezra.webp";
export default function LatestUsers() {
  const users = [
    {
      id: 1,
      img: ben,
      name: "Bruce Wayne",
      email: "brucewayne@gmail.com",
      reviews: 2,
    },
    {
      id: 2,
      img: henry,
      name: "Clark Kent",
      email: "clarkkent@gmail.com",
      reviews: 4,
    },
    {
      id: 3,
      img: ezra,
      name: "Berry Allen",
      email: "berryallen@gmail.com",
      reviews: 1,
    },
  ];
  return (
    <div className="latest_users">
      <div className="latest_users_header">
        <h1 className="latest_users_title">New Users</h1>
        <button className="see_more_button">See more...</button>
      </div>
      <div className="users">
        {users?.map((user) => (
          <div className="user" key={user.id}>
            <div className="img_container">
              <Link href={`/profiles/${user.id}`}>
                <Image src={user.img} alt={user.name} />
              </Link>
            </div>
            <div className="user_info">
              <h1 className="user_name">
                <Link href={`/profiles/${user.id}`}>{user.name}</Link>
              </h1>
              <h3 className="user_email">{user.email}</h3>
              <h3 className="user_time">Joined 2 days ago</h3>
              <h3 className="user_review_count">{user.reviews} Reviews</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
