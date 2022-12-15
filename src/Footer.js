import React from 'react';

export const Footer = ({ logo, copyright }) => {
  return (
    <footer className="footer">
      <div className="container">
        <a href="" className="logo">
          {logo}
        </a>
        <p className="copyright">{copyright}</p>
      </div>
    </footer>
  );
};
