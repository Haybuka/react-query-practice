import React from 'react'
import { useParams } from 'react-router-dom'
import { useSuperHeroData } from '../hooks/useSuperHeroData';




const RqSuperheroe = () => {
  const { heroId } = useParams();

  const dataTransform = (data) => {
    return data?.data
  }

  const options = {
    enabled: true, dataTransform, id: heroId,
    refetchOnWindowFocus: true,

  }

  const { data } = useSuperHeroData(options)

  return (
    <div>
      <h3>Super hero</h3>
      <p>
        {data?.name} - {data?.alterEgo}
        <br />
        age - {data?.age}
      </p>

    </div>
  )
}

export default RqSuperheroe