import "./nav.scss";
import Link from "next/link";
export default function Nav() {
  return (
    <div className="nav">
      <h1>Mind Zen</h1>
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
          <Link href="/profile">Profile</Link>
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
