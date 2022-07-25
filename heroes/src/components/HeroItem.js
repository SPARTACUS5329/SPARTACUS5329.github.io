import { Link } from "react-router-dom";

const HeroItem = (props) => {
  const { hero } = props.props;

  return (
    <div className="HeroItemContainer">
      <Link
        to={`/hero/${hero.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <div className="HeroItem" style={{ width: "fit-content" }}>
          {hero.name}
        </div>
      </Link>
    </div>
  );
};

export default HeroItem;
