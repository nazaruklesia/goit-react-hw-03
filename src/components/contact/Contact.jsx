const Contact = ({ name, number }) => {
  return (
    <div>
      <li>{name}</li>
      <li>{number}</li>
      <button type="submit">Delete</button>
    </div>
  );
};

export default Contact;
