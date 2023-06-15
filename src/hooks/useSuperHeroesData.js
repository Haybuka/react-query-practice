import { useQuery } from 'react-query'
import axios from 'axios'


const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes")
}


export const useSuperHeroesData = (options) => {
  const { dataTransform, ...rest } = options
  return useQuery('super-heroes', fetchSuperHeroes,
    {
      // onSuccess, onError, refetchInterval: pollStop ? 3000 : false, select: dataTransform
      select: dataTransform, ...rest
    })
}
