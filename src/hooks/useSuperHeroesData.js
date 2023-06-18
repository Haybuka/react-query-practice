import { useQuery, useMutation, useQueryClient } from 'react-query'
import axios from 'axios'


const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes")
}

const addSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superheroes", hero)
}

export const useSuperHeroesData = (options = {}) => {
  const { dataTransform, ...rest } = options
  return useQuery('super-heroes', fetchSuperHeroes,
    {
      // onSuccess, onError, refetchInterval: pollStop ? 3000 : false, select: dataTransform
      select: dataTransform,
      refetchOnMount: false,
      enabled: false,
      ...rest,
    })
}

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient()
  return useMutation(addSuperHero, {
    onSuccess: () => {
      queryClient.invalidateQueries('su`per-heroes')
    }
  })
}
