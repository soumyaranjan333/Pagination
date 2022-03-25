import React from 'react'
import "./App.css";

const Pagination = ({postsPerPage,totalPosts,paginate}) => {
    const pageNumbers=[]
    for (let i = 1; i < Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
        
    }
  return (
   <nav className='container'>
       <ul className='pagination'>
       {
           pageNumbers.map(number=>(
               <li className='page-item'>
                   <a onClick={()=>paginate(number)} hef="!#" className='page-link'>
                       {number}
                   </a>
               </li>
           ))
       }
       </ul>
   </nav>
  )
}

export default Pagination