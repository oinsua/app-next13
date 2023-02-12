import { fetchDetailsPost } from '@/services/fetch'
import Link from 'next/link';
import React from 'react'
import classes from './detailsPost.module.css'

export default async function DetailsPost({ id }: {id: string}) {

    const detilsPost = await fetchDetailsPost({ id });
    
  return (
    <>
            <article className={classes.article}>
                    <h2 className={classes.listTitle}>{detilsPost.title}</h2>
                    <p>{detilsPost.body}</p>
                    <div style={{margin: "1rem"}}>
                        <Link href={`/post/${id}/comments`} className={classes.commentsText}>Comments</Link>
                    </div>
            </article>
    </>
  )
}
