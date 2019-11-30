import React from "react";
import jedi from "./jedi.png";
import sith from "./sith.png";

export default function ShowImage(props: any) {
  const { image } = props;
  let picture;

  switch (image) {
    case "sith":
      picture = sith;
      break;
    case "jedi":
      picture = jedi;
      break;

    default:
      picture = jedi;
      break;
  }

  return (
    <div style={{ backgroundColor: "white", height: "45vh", paddingTop: "5%" }}>
      <img src={picture} alt="banner" />
    </div>
  );
}
