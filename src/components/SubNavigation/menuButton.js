import { IconBox } from "./styles";

const MenuButton = (props) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", cursor: "pointer" }}
    >
      <IconBox>
        <img src={props.imgUrl} alt="icon" width={42} />
      </IconBox>
      <label style={{ fontSize: "18px", fontWeight: "700", cursor: "pointer" }}>
        {props.description}
      </label>
    </div>
  );
};

export default MenuButton;
