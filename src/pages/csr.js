// client side rendered
import { useEffect, useState } from 'react';
import { API_URL } from '@/constants';

export default function ClientSideRendered() {
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
    <>
      {state.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}