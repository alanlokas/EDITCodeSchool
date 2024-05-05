import React from "react";
import Logo from "../../assets/img_avatar.png";

export default function () {
  return (
    <div>
      <img
        src={Logo}
        height={"50px"}
        width={"50px"}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}
