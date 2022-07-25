import { useState } from "react";
import HeroItem from "./HeroItem";
import HeroList from "../utils/HeroList";
import sort from "../utils/sort";
import "../styles/Home.css";

const Home = () => {
  let [heroList, setHeroList] = useState(sort(HeroList, HeroList.length));

  return (
    <div className="Home" style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize: "20px",
          marginBottom: "10px",
          fontWeight: "bold",
          color: "#d9ad7a",
        }}
      >
        Top Heroes
      </div>
      <div className="hero-list">
        <div className="hero">
          <HeroItem
            props={{ hero: heroList[0] }}
            key={heroList[0].id}
          ></HeroItem>
        </div>
        <div className="hero">
          <HeroItem
            props={{ hero: heroList[1] }}
            key={heroList[1].id}
          ></HeroItem>
        </div>
        <div className="hero">
          <HeroItem
            props={{ hero: heroList[2] }}
            key={heroList[2].id}
          ></HeroItem>
        </div>
        <div className="hero">
          <HeroItem
            props={{ hero: heroList[3] }}
            key={heroList[3].id}
          ></HeroItem>
        </div>
      </div>
    </div>
  );
};

export default Home;
