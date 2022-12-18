import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
  return (
    <div className='movie-list'>
      {
        movies.map(el=><div>
          <MovieCard movie={el}/>
        </div> )
      }
    </div>
  )
}

export default MovieList








































// import React from 'react'
// import MovieCard from './MovieCard'


// const MovieList = ({movies}) => {
//   return (
//     <div className='movie-list'>
//       {
//         movies.map(el=>
//           <MovieCard movie={el}/>)

//       }
//     </div>
//   )
// }

// export default MovieList