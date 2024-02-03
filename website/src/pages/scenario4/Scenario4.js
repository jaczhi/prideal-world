import { useState } from "react";
import "../scenarios.css";
import PridealApp from "../../components/PridealApp/PridealApp";

function Scenario4() {
  return (
    <PridealApp gameDataPath={"gameData/scenario4.json"} modelPath={"models/HealthSceneObject.glb"} initialLightLoc={[0.8, 2.5, 0.0]} />
  );
}

export default Scenario4;
