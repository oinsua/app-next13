import { fetchCommentsPost } from '@/services/fetch'
import Image from 'next/image';
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
    <ol style={{margin: "1rem", padding: "1rem"}}>
      {
        comments.map(({id, name, email, body}: Comments) => (
            <li key={id}>
              <article className={classes.article} >
                <h4 style={{marginBottom: "1rem"}}>{name}</h4>
                <Image width={40} height={40} src={`https://www.gravatar.com/avatar/${name}?d=retro&f=y&s=128`} alt="avatar" />
                <p style={{marginBottom: "1rem", fontStyle: "italic"}}>{email}</p>
                <p style={{marginBottom: "1rem"}}>{body}</p>
              </article>
            </li>
        ))
      }
    </ol>
  )
}


