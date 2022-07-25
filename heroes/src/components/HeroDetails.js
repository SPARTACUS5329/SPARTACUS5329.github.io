import { useState, useEffect } from "react";
import { useParams } from "react-router";

const HeroDetails = ({ HeroList }) => {
  const id = parseInt(useParams().id);
  const [name, setName] = useState("");
  const [power, setPower] = useState(0);
  const [heroList, setHeroList] = useState(HeroList);
  const [submitState, setSubmitState] = useState(0);

  useEffect(() => {
    console.log("useEffect fired");
    const currHero = heroList.find((hero) => {
      return hero.id === id;
    });

    console.log(currHero.name);
    console.log(currHero.power);

    setName(currHero.name);
    setPower(currHero.power);
  }, [id, heroList]);

  return (
    <div className="HeroDetailsContainer">
      <div className="MiniHeroDetailsContainer">
        <div>
          Hero Name:
          <input
            type="text"
            value={name}
            style={{
              marginLeft: "10px",
              width: "300px",
              fontSize: "15px",
              background: "#ffe1bd",
              color: "#543b1e",
              fontWeight: "bolder",
            }}
            onChange={(e) => {
              setName(e.target.value);
              e.preventDefault();
            }}
          />
        </div>
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          Power:
          <input
            style={{
              marginLeft: "10px",
              width: "300px",
              fontSize: "15px",
              background: "#ffe1bd",
              color: "#543b1e",
              fontWeight: "bolder",
            }}
            type="text"
            value={power}
            onChange={(e) => {
              setPower(parseInt(e.target.value));
              e.preventDefault();
            }}
          />
        </div>
      </div>
      <div className="MiniHeroDetailsContainer">
        <button
          style={{
            marginLeft: "10px",
            width: "300px",
            fontSize: "15px",
            background: "#ffe1bd",
            color: "#000000",
            fontWeight: "bolder",
            borderRadius: "30px",
            padding: "13px",
            marginTop: "10px",
            border: "4px solid black",
          }}
          onClick={(e) => {
            let i;
            for (i = 0; i < heroList.length; i++) {
              if (heroList[i].id === id) {
                break;
              }
            }
            let tempList = heroList;
            tempList[i] = {
              id,
              name,
              power,
            };
            console.log(tempList);
            setHeroList(tempList);
            setSubmitState(1);
            setTimeout(() => {
              setSubmitState(0);
            }, 2500);
            e.preventDefault();
          }}
        >
          Save {!submitState || "✔︎"}
        </button>
      </div>
    </div>
  );
};

export default HeroDetails;
