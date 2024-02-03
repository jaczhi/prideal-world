import { useState } from "react";
import "../scenarios.css";
import PridealApp from "../../components/PridealApp/PridealApp";

function Scenario2() {
  return (
    <PridealApp gameDataPath={"gameData/scenario2.json"} modelPath={"models/HomeSceneObject.glb"} initialLightLoc={[0.8, 1.9, 0.0]} />
  );
}

export default Scenario2;
