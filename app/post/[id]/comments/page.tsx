import CommentsPost from '@/components/comment'
import React from 'react'

type props = {
    params: {
        id: string;
    }
};

export default function CommentsPostId({params}) {

    const { id } = params;

  return (
    <CommentsPost id={id} />
  )
}
