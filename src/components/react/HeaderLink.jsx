// import React from 'react';
import '@styles/react/HeaderLink.css';

function HeaderLink({ children, href, currentPath }) {
  // console.log(` The current Path is: ${currentPath}`);

  return (
    <div className="headerlink">
      <a
        className={`headerlink__title ${
          currentPath === href ? 'headerlink__active' : ''
        }`}
        href={href}
      >
        {children}
      </a>
    </div>
  );
}
export default HeaderLink;
