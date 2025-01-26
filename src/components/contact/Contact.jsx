import { BsPersonFill, BsTelephoneFill } from "react-icons/bs";
const Contact = ({ name, number }) => {
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
      <button type="submit">Delete</button>
    </div>
  );
};

export default Contact;
