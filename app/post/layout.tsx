import React from 'react'
import classes from './post.module.css'

export default function layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className={classes.container}>
         <h1 className={classes.title}>Post</h1>
          {children}
      </div>
    )
}
