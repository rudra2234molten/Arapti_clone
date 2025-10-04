import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const StarRating = ({ rating = 5 }) => {
  return (
    <div className='flex gap-1 text-yellow-400 text-lg'>
      {
        Array(5).fill(' ').map((_, index) => index >= rating ? <span ><FaRegStar /></span> : <span><IoIosStar /></span>)
      }
    </div>
  )
}

export default StarRating