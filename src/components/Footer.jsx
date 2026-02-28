import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My React Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;