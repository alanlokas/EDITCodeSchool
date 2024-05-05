import Logo from "../../assets/logo.png";

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
