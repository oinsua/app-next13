import ListPost from '@/components/listPost'
import React from 'react'
import classes from './post.module.css'

export default function Post() {
  return (
    <div className={classes.container}>
        <ListPost />
    </div>
  )
}
