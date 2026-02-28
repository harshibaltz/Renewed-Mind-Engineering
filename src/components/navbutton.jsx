// components/NavButton.jsx
import React from 'react';

function NavButton({ children, onClick, variant = 'default', active = false }) {
  // variant can be 'default', 'primary', 'signup', etc.
  // active indicates if this button is currently selected

  const buttonClass = `nav-btn ${variant} ${active ? 'active' : ''}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default NavButton;