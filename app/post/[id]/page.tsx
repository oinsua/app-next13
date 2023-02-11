import React from 'react'

type props = {
    params: {
        id: string;
    }
};

export default function DetailsPost({params}:props) {
    const { id } = params;
  return (
    <div>{`DetailsPost ${id}`}</div>
  )
}
