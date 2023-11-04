import React from 'react'
import { useState, useEffect  } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //         fetch("https://api.github.com/users/shanu-sarkar")
    //         .then(responce => responce.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])

    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img className='rounded-full' src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLodar = async() => {
    const responce = await fetch("https://api.github.com/users/shanu-sarkar")
    return responce.json()
}

