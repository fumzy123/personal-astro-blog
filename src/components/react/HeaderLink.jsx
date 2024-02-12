// import React from 'react';
import '../../styles/component-styling/HeaderLink.css';

function HeaderLink({ children, href, currentPath }) {
  // console.log(currentPath);
  return (
    <div className="headerlink">
      <a className="headerlink__title" href={href}>
        {children}
      </a>
      <span
        className={`headerlink__underline ${
          currentPath === href ? 'headerlink__active' : ''
        }`}
      ></span>
    </div>
  );
}
export default HeaderLink;
