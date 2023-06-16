import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const fetchFriends = () => {
  return axios.get(`http://localhost:4000/friends`)

}

const fetchSuperHeroes = () => {
  return axios.get(`http://localhost:4000/superheroes`)

}


const ParallelQueries = () => {

  const { data: friends } = useQuery("friends", fetchFriends, {
    select: (data) => data.data.map(friend => friend),
  })

  const { data: heroes } = useQuery("superheroes", fetchSuperHeroes, {
    select: (data) => data.data.map(friend => friend),
  })




  return (
    <div>
      <section>
        <h4>friends</h4>
        <ul>
          {friends?.map((friend) => (
            <li key={friend.id}>{friend.name}</li>
          ))}
        </ul>

      </section>
      <section>
        <h4>superheroes</h4>
        <ul>
          {heroes?.map((hero) => (
            <li key={hero.id}>{hero.name}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default ParallelQueries