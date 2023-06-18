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
    // onSuccess: (data) => {
    // using the invalidate request
    // queryClient.invalidateQueries('super-heroes')
    // queryClient.setQueryData('super-heroes', (oldData) => {
    //   return {
    //     ...oldData,
    //     data: [...oldData.data, data.data]
    //   }
    // })
    //  }

    //##optimistic update

    onMutate: async (newHero) => {
      //takes the new hero that refers to the data to be optimistically added
      await queryClient.cancelQueries('super-heroes')
      //cancle queries to super heroes so as to not trigger wahala
      const previousHero = queryClient.getQueryData('super-heroes')


      //get cached data, in other to create new
      // queryClient.invalidateQueries('super-heroes')
      // invalidate to trigger a fetch
      queryClient.setQueryData('super-heroes', (oldData) => {
        //setting the pages query data
        return {
          ...oldData,
          data: [...oldData?.data, { id: oldData?.data?.length + 1, ...newHero }]
          //adding id to macth json structure
        }
      })
      //the return of previous data is used to roll out  data incase the mutaiion errors out
      return {
        previousHero
      }
    },
    onError: (_error, _hero, context) => {
      console.log({ _error })
      //called incase mutaion meets an error, takes 3 values
      // 1. the error
      //2 . the data
      // 3. context : xcontains info partaining the mutaion. gives us access to the previous data.
      queryClient.setQueryData('super-heroes', context?.previousHero)
    },
    onSettled: () => {
      //called if either mutatiin is settld or contains an error. also runs a refresh of query
      queryClient.invalidateQueries('super-heroes')

    }
  })
}
