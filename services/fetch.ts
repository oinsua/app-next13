/*
getStaticProps =>  return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json());

getServerSideProps =>  return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
        .then(res => res.json());

Incremental Static Generation =>  return fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } })
        .then(res => res.json());

*/

export function fetchPost(): Promise<any> {
        return fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } })
                .then(res => res.json());
};

type props = {
        id: string;
};

export function fetchDetailsPost({ id }: props): Promise<any> {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { revalidate: 60 } })
                .then(res => res.json());
};

export function fetchCommentsPost({ id }: props): Promise<any> {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { next: { revalidate: 60 } })
                .then(res => res.json());
};
