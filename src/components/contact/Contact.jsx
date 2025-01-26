import { BsPersonFill, BsTelephoneFill } from "react-icons/bs";
const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div>
      <li>
        <BsPersonFill />
        {name}
      </li>
      <li>
        <BsTelephoneFill />
        {number}
      </li>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
