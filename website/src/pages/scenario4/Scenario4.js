import { useState } from "react";
import "../scenarios.css";
import PridealApp from "../../components/PridealApp/PridealApp";

function Scenario4() {
  return (
    <PridealApp gameDataPath={"gameData/scenario4.json"} modelPath={"models/HealthSceneObject.glb"} initialLightLoc={[1.8, 3.4, 0.0]} />
  );
}

export default Scenario4;
