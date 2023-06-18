import { Link } from 'react-router-dom';
import { useSuperHeroesData, useAddSuperHeroData } from '../hooks/useSuperHeroesData'
import { useState } from 'react';



const dataTransform = (data) => {
  const superHeroNames = data?.data.map(hero => hero);
  return superHeroNames

}

const RQSuperHeroes = () => {
  const { mutate: addHero } = useAddSuperHeroData()
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')

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


  const handleAddHeroClick = () => {
    addHero({ name, alterEgo })
  }
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
      <div>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          type='text'
          value={alterEgo}
          onChange={e => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}> Add Hero</button>
      </div>

      <button onClick={refetch}>Fetch data</button>
    </div>
  )
}

export default RQSuperHeroes