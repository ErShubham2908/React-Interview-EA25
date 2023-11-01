import React from 'react'
import { useParams } from 'react-router-dom';

function Dynamic() {
  const data =  useParams().name
  console.log(data.name);
  return (
    <>
      <h2>Month : {data}</h2>
    </>
  )
}

export default Dynamic;
