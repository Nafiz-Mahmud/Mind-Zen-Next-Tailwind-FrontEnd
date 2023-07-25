"use client";
import { useState } from "react";
import "../../styles/write.scss";
import Image from "next/image";
export default function Write() {
  const [bookImg, setBookImg] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [desc, setDesc] = useState("");
  const [error, SetError] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  function handleImageChange(e: any) {
    const file = e.target.files[0];
    if (file) {
      setBookImg(URL.createObjectURL(file));
    }
  }
  return (
    <div className="write">
      <h1 className="write_title">Write Your Review</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          className="input_img"
          id="input_img_id"
          onChange={(e) => handleImageChange(e)}
        />
        <label htmlFor="input_img_id" className="custom-file-input">
          Select Book Cover Image
        </label>
        {bookImg && (
          <div className="input_img_container">
            <Image src={bookImg} alt={title} height={1000} width={560} />
          </div>
        )}

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
          placeholder="Rating ( Must be <= 5.00 )"
          onChange={(e) => setRating(e.target.value)}
        />
        <textarea
          name="desc"
          id="desc"
          cols={60}
          rows={15}
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
