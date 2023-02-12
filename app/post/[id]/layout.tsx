import DetailsPost from '@/components/details';
import React from 'react'
import classes from './detailsPostId.module.css'

type props = {
    params: {
        id: string;
    }
    children: any
};

export default function DetailsPostId({params, children}:props) {
    const { id } = params;
  return (
    <article className={classes.article}>
      <DetailsPost id={id} />
      {children}
    </article>
  )
}
