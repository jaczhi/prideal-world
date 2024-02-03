import { useState } from "react";
import "../scenarios.css";
import PridealApp from "../../components/PridealApp/PridealApp";

function Scenario3() {
  return (
    <PridealApp gameDataPath={"gameData/scenario3.json"} modelPath={"models/WorkplaceSceneObject.glb"} initialLightLoc={[0.8, 2.5, 0.0]} />
  );
}

export default Scenario3;
