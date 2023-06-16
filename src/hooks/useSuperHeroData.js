import { useQuery } from 'react-query'
import axios from 'axios'


const fetchSuperHero = (id) => {
  return axios.get(`http://localhost:4000/superheroes/${id}`)
}


export const useSuperHeroData = (options = {}) => {
  const { dataTransform, id, ...rest } = options
  return useQuery('superhero', () => fetchSuperHero(id),
    {
      // onSuccess, onError, refetchInterval: pollStop ? 3000 : false, select: dataTransform
      select: dataTransform,
      refetchOnMount: false,
      enabled: false,
      ...rest,
    })
}
