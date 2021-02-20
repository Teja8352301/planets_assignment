import "./Navitem.css";
import { Link } from "react-router-dom";
const navItem = props => {
  return (
    <Link className="Navitem" to={props.link}>
      {props.children}
    </Link>
  );
};
export default navItem;
