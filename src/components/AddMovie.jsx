import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');


const AddMovie = ({Add}) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [rating, setRating] = useState(1)
  const [image, setImage] = useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    let newMovie={
      id:Math.random(),
      name,
      date,
      rating,

    }
    Add(newMovie)
    closeModal()
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleRating=(x)=>setRating(x)
  return (
    <div>
      <button className='btn add-movie-btn' onClick={openModal}>AddMovie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
        <label >name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <label >date</label>
        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
        <label >rating</label>
        <StarRating handleRating={handleRating} rating={rating} />
        <label >Poster</label>
        <input type="URL" value={image} onChange={(e)=>setImage(e.target.value)} />
        <div>
        <button type='submit' className='btn btn-primary'>confirm</button>
        <button className='btn btn-primary'>cancel</button>
        </div>
        </form>

        
      </Modal>
    </div>
  )
}

export default AddMovie
































// import React, { useState } from 'react'
// import Modal from 'react-modal';
// import StarRating from './StarRating';

// const AddMovie = ({add}) => {
//   const [name, setName] = useState('')
//   const [rating, setRating] = useState(1)
//   const [date, setDate] = useState('')
//   const [image, setImage] = useState('')
  
//   const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//     },
//   };
//   Modal.setAppElement('#root');
//   let subtitle;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }



//   function closeModal() {
//     setIsOpen(false);
//   }
//   const handlSubmit=(e)=>{
//    e.preventDefault()
//     const newMovie={
//       id:Math.random(),
//       name,
//       image,
//       rating,
//       date,
//     }
//     add(newMovie)
//     closeModal()
//   }
//   const handlRating = (x) => setRating(x)
//   return (
//     <div>
//       <button className='btn add-movie-btn' onClick={openModal}>Add movie</button>
//       <Modal
//         isOpen={modalIsOpen}
        
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <form onSubmit={handlSubmit} >
//           <label>name</label>
//           <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
//           <label>Date</label>
//           <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
//           <label>rating</label>
//           <StarRating handlRating={handlRating} rating={rating}/>
//           <label>Poster</label>
//           <input type="URL" value={image} onChange={(e)=>setImage(e.target.value)}/>
//           <div>
//             <button type='submit' className='btn btn-primary'>confirm</button>
//             <button className='btn btn-primary'>cancel</button>

//           </div>
         
//         </form>
//       </Modal>
//     </div>
//   )
// }

// export default AddMovie