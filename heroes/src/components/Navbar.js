import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div
        id="title"
        style={{ fontSize: "40px", textAlign: "center", marginBottom: "10px" }}
      >
        Tour of Heroes
      </div>
      <div className="nav-buttons" style={{ fontSize: "25px" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div id="dashboard-button" className="nav-button">
            <div style={{ color: "bisque" }}>Dashboard</div>
          </div>
        </Link>

        <Link to="/heroes" style={{ textDecoration: "none" }}>
          <div id="Heroes-button" className="nav-button">
            <div style={{ color: "bisque" }}>Heroes</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
