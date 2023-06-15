import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Superheroes = () => {
  const [data, setData] = useState([])
  const [isloading, setIsLoading] = useState(false)


  useEffect(() => {
    setIsLoading(prev => !prev)
    axios.get("http://localhost:4000/superheroes")
      .then((res) => {
        setIsLoading(previous => !previous)
        setData(res.data)
      })
  }, [])

  if (isloading) {
    return <h4>.... loading</h4>
  }

  return (
    <div>
      {
        data.map((heroes, id) => (
          <h4 key={id}>{heroes.name}</h4>
        ))
      }
    </div>
  )
}

export default Superheroes