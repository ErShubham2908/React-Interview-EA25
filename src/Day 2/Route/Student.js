import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Student() {
  const [table, setTable] = useState([
    {name : "EA24", Session : "April"},
    {name : "EA25", Session : "May"},
    {name : "EA25", Session : "June"},
    {name : "EA25", Session : "July"},
    {name : "EA25", Session : "Aug"},
    {name : "EA25", Session : "Sept"},
  ])
  return (
    <>
        <h1>This is Student </h1>
        {table.map((item, index) => {
          return(
            <> 
              <h1> <span>{item.name}</span> | <span>{item.Session} | </span> <span> <Link to={`/dynamic/${item.Session}`} >Edit</Link> </span> </h1>
            </>
          )
        })}
    </>
  )
}

export default Student;