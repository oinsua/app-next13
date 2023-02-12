import DetailsPost from '@/components/details';
import React from 'react'

type props = {
    params: {
        id: string;
    }
    children: any
};

export default function DetailsPostId({params, children}:props) {
    const { id } = params;
  return (
    <> 
      <DetailsPost id={id} />
      {children}
    </>
  )
}
