import Contact from "../contact/Contact";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} onDelete={deleteContact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
