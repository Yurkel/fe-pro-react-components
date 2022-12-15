import React from 'react';

export const Header = ({ links }) => {
  return (
    <header className="header">
      <div className="container">
        <Logo logoText="My Logo" />

        <nav>
          <ul className="nav-list">
            {Object.values(links).map(({ label, href }) => (
              <NavItem
                key={Math.random()}
                label={label}
                href={href}
                className="nav-list__item"
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const NavItem = ({ label, href, className }) => (
  <li className={className}>
    <a href={href}>{label}</a>
  </li>
);

const Logo = ({ logoText }) => {
  return (
    <a href="" className="logo">
      {logoText}
    </a>
  );
};
