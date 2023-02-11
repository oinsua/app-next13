import React from 'react'
import Navigate from '../navigate/navigate'
import classes from './header.module.css'

function Header() {
  return (
    <header className={classes.main}>
        <Navigate/>
    </header>
  )
}

export default Header