// client side rendered
import { useEffect, useState } from 'react';
import { API_URL } from '@/constants';

export default function CSR() {
  const [state, setState] = useState([]);

  async function getData() {
    const res = await fetch(API_URL);
    
    const data = await res.json();
    setState(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='content'>
    <h1>CSR</h1>
    <div className='list'>     
       {state.map((e) => (
          <button className='btn' key={e.id}>
            {e.name}
          </button>
      ))}
    </div>
  </div>
  );
}