"use client";
import { ChangeEvent, useState } from "react";
import "../../styles/log_in.scss";
import Link from "next/link";
export default function SignUp() {
  const [isShowPass, setIsShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<null | String>(null);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ email, password });
    password.length < 6
      ? setError("Password must be atleast 6 characters.")
      : setError(null);
  }
  return (
    <div className="log_in">
      <div className="login_container">
        <h1 className="login_title">Log In</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            onInput={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <input
            type={isShowPass ? "text" : "password"}
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="show_hide_password"
            onClick={() => setIsShowPass((c) => !c)}
          >
            {isShowPass ? "Hide" : "Show"} Password
          </button>
          {error && <h6 className="login_error">{error}</h6>}
          <button className="login_submit_button" type="submit">
            Log In
          </button>
        </form>
        <p>
          Don{"'"}t have an account?{" "}
          <span className="sign_up_here">
            <Link href="/sign_up">sign up here</Link>
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
