import "./nav.scss";
import Link from "next/link";
export default function Nav() {
  return (
    <div className="nav">
      <div className="nav_title">
        <h1>
          <Link href="/">Mind Zen</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/reviews">Reviews</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/user_profile/123">Profile</Link>
        </li>
        <button>
          <Link href="/sign_up" className="sign_up_button">
            Sign Up
          </Link>
        </button>
        <button>
          <Link href="/log_in" className="log_in_button">
            Log In
          </Link>
        </button>
      </ul>
    </div>
  );
}
