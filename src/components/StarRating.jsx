import React from 'react'

const StarRating = ({handleRating,rating}) => {
    function strats(x){
        let star=[]
        for(let i=1; i<=5; i++){
            if(i<=x){
                star.push (<span onClick={()=>handleRating(i)} style={{color:'gold',fontSize:'20px',cursor:'pointer'}}>★</span>)
            }
            else star.push(<span onClick={()=>handleRating(i)} style={{color:'black',fontSize:'20px',cursor:'pointer'}}>★</span>)
        }
        return star
    }
  return (
    <div>
        {
            strats(rating)
        }
    </div>
  )
}

export default StarRating













































// import React from 'react'

// const StarRating = ({rating,handlRating}) => {
//   function Starts(rating){
//     let star=[]
//     for(let i=1;i<=5;i++){
//       if(i<=rating){
//         star.push(
//           <spain onClick={()=>handlRating(i)} style={{color:'gold',fontSize:'20px', cursor:'pointer'}}>★</spain>
//         )
//       }
//       else star.push(<spain onClick={()=>handlRating(i)} style={{color:'black',fontSize:'20px',cursor:'pointer'}}>★</spain>)

//     }
//     return star
//   }
//   return (
//     <div>
//       {Starts(rating)}
//     </div>
//   )
// }
// StarRating.defaultProps={
//   handlRating:()=>{}

// }
// export default StarRating