import ListPost from '@/components/listPost'
import React from 'react'
import classes from './post.module.css'

export default function Post() {
  return (
    <div className={classes.container}>
        <h1 className={classes.title}>Post</h1>
        <ListPost />
    </div>
  )
}
