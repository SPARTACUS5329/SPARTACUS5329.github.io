import HeroList from "../utils/HeroList";
import HeroItem from "./HeroItem";
const Heroes = () => {
  return (
    <div className="Heroes" style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize: "20px",
          marginBottom: "10px",
          fontWeight: "bold",
          color: "#d9ad7a",
        }}
      >
        List of Heroes
      </div>
      {HeroList.map((hero) => {
        return <HeroItem props={{ hero }} key={hero.id}></HeroItem>;
      })}
    </div>
  );
};

export default Heroes;
