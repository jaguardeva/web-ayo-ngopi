import React from "react";
import Quotes from "../components/About/Quotes";
import Ourmission from "../components/About/Ourmission";
import Team from "../components/About/Team";

export default function About() {
  return (
    <div className="w-full">
      <Quotes />
      <Ourmission />
      <Team />
    </div>
  );
}
