import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Düğün Salonu. Tüm hakları saklıdır.
      </p>
    </footer>
  );
};

export default Footer;
