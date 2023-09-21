import { API_URL } from '@/constants';
import React from 'react';
import { useParams } from 'next/navigation'

function update() {
  const params = useParams()
  console.log(params)

  const editProductName=()=>{
    fetch(`${API_URL}?id=`,{
      method:"put",
      
    
  })
   
  }
  return (
    <div>
      <h2>update Product with id #1</h2>
<button onClick={editProductName}>Edit</button>

    </div>
  )
}

export default update