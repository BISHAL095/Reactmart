import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="home-container">

      <h1 className="home-heading">
        Welcome to ReactMart 🛒
      </h1>

      <p className="home-text">
        A modern shopping experience built with React, Context API, and clean architecture.
      </p>

      <button 
        className="home-button"
        onClick={() => navigate("/shop")}
      >
        Start Shopping
      </button>

    </div>
  );
}