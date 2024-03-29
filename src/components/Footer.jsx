import React from "react";
//4. Create a Footer.jsx component that renders a <footer> element to show a copyright message in a <p> with a dynamically updated year.
const date = new Date();
const currentYear = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p> Copyright &copy; {currentYear} </p>
    </footer>
  );
}

export default Footer;
