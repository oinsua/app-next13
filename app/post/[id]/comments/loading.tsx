import React from 'react'
import classes from './commentPage.module.css'

export default function loading() {
  return (
    <div className={classes.container}>
        <div className={classes.spinner}></div>
    </div>
  )
}
