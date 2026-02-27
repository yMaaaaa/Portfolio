import "./Card.css";

export default function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://i.pinimg.com/736x/ae/4b/26/ae4b26120159cb3e8ccb0165ba2bf17c.jpg"
          alt="My profile picture"
          className="profile-picture"
        />
        <h3 className="name">DOUTEAUD Mattéo</h3>
        <p className="title">Développeur Web</p>
      </div>
    </div>
  );
}
