import Link from 'next/link';
import React from 'react'
import classes from './navigate.module.css'

const navigation = [
    {
        label: "Home",
        route: "/"
    },
    {
        label: "About",
        route: "/about"
    },
    {
      label: "Post",
      route: "/post"
  }
];

function Navigate() {
    return (
        <nav className={classes.nav}>
              <ul className={classes.ul}>
                {navigation.map(({ label, route }) => {
                  return (
                    <li key={route}>
                      <Link href={route} className={classes.link}>{label}</Link>
                    </li>
                  );
                })}
              </ul>
        </nav>
      )
}

export default Navigate