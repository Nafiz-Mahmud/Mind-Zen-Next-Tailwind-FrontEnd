"use client";
import { useState } from "react";
import "../../styles/write.scss";
export default function Write() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [desc, setDesc] = useState("");
  const [error, SetError] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="write">
      <h1 className="write_title">Write Your Review</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rating"
          onChange={(e) => setRating(e.target.value)}
        />
        <textarea
          name="desc"
          id="desc"
          cols="60"
          rows="15"
          placeholder="Write your review..."
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <div className="write_submit">
          <button type="submit" className="write_submit_button">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
