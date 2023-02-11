import { fetchPost } from '@/services/fetch'
import React from 'react'
import Button from '../button';
import classes from './listPost.module.css';

type Post = {
    id: number;
    title: string;
    body: string;
};

async function ListPost() {
    const posts = await fetchPost();

  return (
    <>
      {
        posts.slice(0,10).map(({id, title, body}:Post) => (
            <article key={id} className={classes.article}>
                <h2 className={classes.listTitle}>{title}</h2>
                <p>{body}</p>
                <Button />
            </article>
        ))
      }
    </>
  )
}

export default ListPost