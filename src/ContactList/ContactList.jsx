import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const list = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.name);

  const visibleList = list.filter((item) =>
    item.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <ul className={css.list}>
        {visibleList.map((contact) => {
          return (
            <li key={contact.id} className={css.liWrapper}>
              <Contact
                name={contact.name}
                number={contact.number}
                id={contact.id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
