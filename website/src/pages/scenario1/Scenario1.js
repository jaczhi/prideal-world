import { useState } from "react";
import "../scenarios.css";
import PridealApp from "../../components/PridealApp/PridealApp";

function Scenario1() {
  return (
    <PridealApp gameDataPath={"gameData/scenario1.json"} modelPath={"models/SM_Env_Tree_03.glb"} initialLightLoc={[0.8, 1.4, 3.0]} />
  );
}

export default Scenario1;
