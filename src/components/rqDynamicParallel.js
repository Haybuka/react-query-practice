import axios from 'axios'
import { useQueries } from 'react-query'


const RQDynamicParallel = () => {
  const heroId = [2, 1];

  const fetchHeroes = (id) => {
    return axios.get(`http://localhost:4000/superheroes/${id}`)
  }
  const queriesMap = (ids) => ids.map((id) => {
    return ({
      queryKey: ['hero', id],
      queryFn: () => fetchHeroes(id)

    })
  })


  const results = useQueries(queriesMap(heroId))


  console.log({ results })
  return (
    <div>RQDynamicParallel</div>
  )
}

export default RQDynamicParallel