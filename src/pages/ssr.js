// server side rendering
import { API_URL } from '@/constants';

export default function ServerSideRendered({ data }) {
  return (
    <>
      {data.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(API_URL);
  const data = await res.json();

  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}