// Import Packages
import clsx from 'clsx';

// Import Styling
import styles from '@styles/mobilenav.css';

function MobileNavLink({ navItems, currentPath }) {
  console.log(navItems);

  // Render Mobile Nav
  return (
    <nav class="mobile-nav inactive">
      <ul class="mobile-nav__menu">
        {navItems?.map((item) => {
          return (
            <li>
              <a
                className={clsx('mobile-nav__item', {
                  'mobile-nav__item--active':
                    currentPath === item.href,
                })}
                href={item.href}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MobileNavLink;
