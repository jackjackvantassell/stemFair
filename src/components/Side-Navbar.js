// Side-Navbar.js
import React from "react";
import "../css/Side-Navbar.css";

const SideNavbar = ({ concepts }) => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -50; // Adjust this value to suit your layout
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
      <div className="navbar">
      {concepts.map(concept => (
        <li key={concept.id}>
          <a class="a-tag" href={`#${concept.id}`} onClick={() => handleClick(concept.id)}>
            {concept.name}
          </a>
        </li>
      ))}
      </div>
  );
};

export default SideNavbar;
