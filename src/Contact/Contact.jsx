import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BiSolidPhone } from "react-icons/bi";

export default function Contact({ name, number, id, onDelete }) {
  return (
    <div className={css.cardWrapper}>
      <div>
        <p>
          <FaUser size="14" color="rgb(9, 90, 33)" padding="10px" />
          {name}
        </p>
        <p>
          <BiSolidPhone size="18" color="rgb(9, 90, 33)" />
          {number}
        </p>
      </div>
      <button type="button" className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
