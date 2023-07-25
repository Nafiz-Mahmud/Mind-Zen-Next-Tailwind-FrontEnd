"use client";
import "../../styles/sign_up.scss";
import { useState } from "react";
import Link from "next/link";
export default function SignUp() {
  const [isShowPass, setIsShowPass] = useState(false);
  async function handleSubmit(e: any) {
    e.preventDefault();
  }
  return (
    <div className="sign_up">
      <div className="signup_container">
        <h1 className="signup_title">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="User Name..." />
          <input type="email" name="email" placeholder="Email..." />
          <input
            type={isShowPass ? "text" : "password"}
            placeholder="Password..."
          />
          <button
            className="show_hide_password"
            onClick={() => setIsShowPass((c) => !c)}
          >
            {isShowPass ? "Hide" : "Show"} Password
          </button>
          <button className="signup_submit_button" type="submit">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <span className="login_here">
            <Link href="/log_in">log in</Link>
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
