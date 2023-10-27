import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function APIData() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => setUser(response.data))
        .catch((err) => console.log(err))

    }, [])
    // console.log(user);
  return (
    <>
      {user.map((item, index) => {
        return (
            <> 
                <h2>Name : {item.name}</h2>
                <h2>Username : {item.username}</h2>
            </>
        )
      })}
    </>
  )
}

export default APIData;