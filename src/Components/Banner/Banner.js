import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import axios from '../../axios'


import './Banner.css'


const Banner = () => {
   const [movie,setMovie]=useState([])
   const [movieIndex,setCurrentIndex]=useState(0)
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results)
      
    })

  },[])
  useEffect(()=>{
    setCurrentIndex(Math.floor(Math.random()*movie.length))
  },[movie])
  const currentMovie = movie[movieIndex];
  
  return (
    <div 
    style={{backgroundImage:`url(${currentMovie?imageUrl+currentMovie.backdrop_path:''})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{currentMovie? currentMovie.title:''}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='discription'>{currentMovie?currentMovie.overview:''}  </h1>

        </div>
       <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner