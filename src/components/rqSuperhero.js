import React from 'react'
import { useParams } from 'react-router-dom'
import { useSuperHeroData } from '../hooks/useSuperHeroData';




const RqSuperheroe = () => {
  const { heroId } = useParams();

  const dataTransform = (data) => {
    return data.data
  }

  const options = {
    enabled: true, dataTransform, id: heroId
  }

  const { data } = useSuperHeroData(options)
  console.log({ data })
  return (
    <div>
      <h3>Super hero</h3>
      <p>
        {data.name} - {data.alterEgo}
      </p>

    </div>
  )
}

export default RqSuperheroe