import { NavLink } from "react-router-dom";
import { Group_key_arr, Group_obj } from "../atom/NavList";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
      <div>
        <div className={styles.group}>
          <NavLink to="/">Home</NavLink>
        </div>
        {Group_key_arr.map((key) => (
          <div className={styles.group} key={key}>
            <NavLink exact to={`/group/${Group_obj[key]}`}>
              {key}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
}
export default Navbar;
