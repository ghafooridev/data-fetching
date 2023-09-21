// incremental static generation
import { API_URL } from '@/constants';

export default function ISR(props) {
  const data=props?.data;
  return (
    <div className='content'>
    <h1>ISR</h1>
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


export async function getStaticProps() {
  const res = await fetch(API_URL);
  const data = await res.json();

  return {
    props: {
      data,
       // will be passed to the page component as props
    },
    revalidate: 30, // In seconds
  };
}