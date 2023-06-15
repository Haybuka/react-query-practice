import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes")
}

const RQSuperHeroes = () => {
  const [pollStop, setPollStop] = useState(true)
  const onSuccess = (data) => {
    data?.data.length === 5 && setPollStop(false)
    console.log("perform side effect after data fetch", data?.data.length)
  }

  const onError = () => {
    setPollStop(false)
    console.log("perform side effect on error")
  }
  const { data, isLoading, isError, error, refetch } = useQuery('super-heroes', fetchSuperHeroes,
    { onSuccess, onError, refetchInterval: pollStop ? 3000 : false })

  if (isLoading) {
    return <h4>.... loading</h4>
  }

  if (isError) {
    return <h4>{error.message}</h4>
  }
  return (
    <div>
      {
        data?.data.map((heroes, id) => (
          <h4 key={id}>{heroes.name}</h4>
        ))
      }
      <button onClick={refetch}>Fetch data</button>
    </div>
  )
}

export default RQSuperHeroes