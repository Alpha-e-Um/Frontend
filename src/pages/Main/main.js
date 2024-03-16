import React from "react";
import Navigation from "../../components/Navigation/navigation";
import Introduce from "../../components/Introduce/introduce";
import SubNavigation from "../../components/SubNavigation/subNavigation";

const Main = (props) => {
  return (
    <div>
      <Navigation />
      <div
        style={{
          padding: "30px 60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Introduce />
        <SubNavigation />
      </div>
    </div>
  );
};

export default Main;
