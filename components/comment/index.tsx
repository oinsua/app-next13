import { fetchCommentsPost } from '@/services/fetch'
import React from 'react'
import classes from './commentPost.module.css'

type Comments = {
    id: number; 
    name: string; 
    email: string; 
    body: string;
}
export default async function CommentsPost({ id }: {id: string}) {

    const comments = await fetchCommentsPost({id});

  return (
    <>
      {
        comments.map(({id, name, email, body}: Comments) => (
            <article key={id} className={classes.article}>
                <h3 style={{marginBottom: "1rem"}}>{name}</h3>
                <p style={{marginBottom: "1rem", fontStyle: "italic"}}>{email}</p>
                <p style={{marginBottom: "1rem"}}>{body}</p>
            </article>
        ))
      }
    </>
  )
}


