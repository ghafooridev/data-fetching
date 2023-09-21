// server side rendering
import { API_URL } from '@/constants';

export default function SSR({ data }) {
  return (
  <div className='content'>
    <h1>SSR</h1>
    <div className='list'>     
       {data.map((e) => (
          <button className='btn' key={e.id}>
            {e.name}
          </button>
      ))}
    </div>
  </div>
);
}

export async function getServerSideProps() {
  const res = await fetch(API_URL);
  const data = await res.json();

  return {
    props: {
      data
    },
  };
}