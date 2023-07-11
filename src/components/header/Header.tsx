import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <h1 className="header_title">
        A place for reviewing books and sharing knowledge.
      </h1>
      <div className="header_anime">
        <iframe
          className="header_animation"
          src="https://embed.lottiefiles.com/animation/72170"
        ></iframe>
      </div>
    </div>
  );
}
