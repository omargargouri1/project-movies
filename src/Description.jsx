import React from 'react'
import { useParams } from 'react-router'

const Description = ({movies}) => {
    const params =useParams()
    const el=movies.find(movie=>movie.id===Number(params.id))


  return (
    <div>
        <h3 style={{color:'white'}}>{el.description}</h3>
        <iframe src={el.trailer} height={500} width={700}></iframe>
    </div>
  )
}

export default Description