import { Link } from 'react-router-dom';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData'



const dataTransform = (data) => {
  const superHeroNames = data?.data.map(hero => hero);
  return superHeroNames

}

const RQSuperHeroes = () => {
  const onSuccess = (data) => {
    console.log("perform side effect after data fetch")
  }

  const onError = () => {
    console.log("perform side effect on error")
  }

  const options = {
    onError, onSuccess, dataTransform
  }

  const { data, isLoading, isError, error, refetch } = useSuperHeroesData(options)

  if (isLoading) {
    return <h4>.... loading</h4>
  }


  if (isError) {
    return <h4>{error.message}</h4>
  }
  return (
    <div>
      {
        data?.map((heroes, id) => (
          <h3 key={id}>
            <Link to={`/rq-super-heroes/${heroes.id}`}>{heroes.name}</Link>
          </h3>
        ))
      }
      <button onClick={refetch}>Fetch data</button>
    </div>
  )
}

export default RQSuperHeroes