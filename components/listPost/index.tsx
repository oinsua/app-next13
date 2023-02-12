import { fetchPost } from '@/services/fetch'
import Link from 'next/link';
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
                <Link href={`/post/[id]`} as={`/post/${id}`}>
                    <h2 className={classes.listTitle}>{title}</h2>
                    <p>{body}</p>
                </Link>
                <Button />
            </article>
        ))
      }
    </>
  )
}

export default ListPost