import { useQuery } from 'react-query'
import axios from 'axios'


const fetchSuperHero = ({ queryKey }) => {
  const id = queryKey[1]
  return axios.get(`http://localhost:4000/superheroes/${id}`)
}


export const useSuperHeroData = (options = {}) => {
  const { dataTransform, id, ...rest } = options
  return useQuery(['superhero', id], fetchSuperHero,
    {
      // onSuccess, onError, refetchInterval: pollStop ? 3000 : false, select: dataTransform
      select: dataTransform,
      refetchOnMount: false,
      enabled: false,
      ...rest,
    })
}
