import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'


const fetchSuperHero = ({ queryKey }) => {
  const id = queryKey[1]
  return axios.get(`http://localhost:4000/superheroes/${id}`)
}


export const useSuperHeroData = (options = {}) => {
  const queryClient = useQueryClient()
  const { dataTransform, id, ...rest } = options
  return useQuery(['superhero', id], fetchSuperHero,
    {
      // onSuccess, onError, refetchInterval: pollStop ? 3000 : false, select: dataTransform
      select: dataTransform,
      refetchOnMount: false,
      enabled: false,
      // initial data to load from cached request
      // 'super-heroes' refers to the request cache to look for in query data
      // build structure to follow page render
      // undefined to stop load if page is nto found
      initialData: () => {
        const hero = queryClient.getQueryData('super-heroes')?.data?.find((hero) => hero.id === parseInt(id))
        if (hero) {
          return { data: hero }
        } else {
          return undefined
        }
      },
      ...rest,
    })
}
