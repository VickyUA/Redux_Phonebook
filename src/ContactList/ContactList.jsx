import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ list, onDelete }) {
  return (
    <div>
      <ul className={css.list}>
        {list.map((contact) => {
          return (
            <li key={contact.id} className={css.liWrapper}>
              <Contact
                name={contact.name}
                number={contact.number}
                id={contact.id}
                onDelete={onDelete}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
