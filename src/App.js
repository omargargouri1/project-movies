import React, { useState } from 'react'
import MovieList from './components/MovieList'
import { moviesData } from './data'
import './App.css'
import Search from './components/Search'
import AddMovie from './components/AddMovie'

const App = () => {
  const [movies, setMovies] = useState(moviesData)
  const [text, setText] = useState('')
  const [rating, setRating] = useState(1)
  const handleAdd=(newMovie)=>setMovies([...movies,newMovie])
  const handleText=(e)=>setText(e.target.value)
  const handleRating=(x)=>setRating(x)

  return (
    <div className='App'>
      <AddMovie Add={handleAdd}/>
      <Search text={text} handleText={handleText} rating={rating} handleRating={handleRating}/>
      <MovieList movies={movies.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())&& el.rating>=rating)}/>
    </div>
  )
}

export default App






































// import React, { useState } from 'react'
// import MovieList from './components/MovieList'
// import { moviesData } from './data'
// import './App.css'
// import Search from './components/Search'
// import AddMovie from './components/AddMovie'

// const App = () => {
// const [movies, setMovies] = useState(moviesData)
// const handleAdd=(newMovie)=>setMovies([...movies,newMovie])
// const [text, setText] = useState('')
// const [rating, setRating] = useState(1)

// const handleText=(e)=>setText(e.target.value)
// const handleRating=(x)=>setRating(x)
 
//   return (
//     <div className='App'>

//      <AddMovie add={handleAdd} />
//      <Search rating={rating} text={text} handleText={handleText} handlRating={handleRating}/>
//      <MovieList movies={movies.filter(el=>el.name.toLowerCase().includes(text.toLowerCase( ))&& el.rating>=rating)}/>
//     </div>
//   )
// }

// export default App