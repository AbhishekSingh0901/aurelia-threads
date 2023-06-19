import { ReactComponent as Arrow } from "../../../assests/arrow.svg";

const Button = ({ name }) => {
  return (
    <button type="submit" className="next">
      <span>{name}</span>
      <Arrow style={{ width: "1.8rem" }} />
    </button>
  );
};

export default Button;
