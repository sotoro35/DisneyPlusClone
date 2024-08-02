import React, { useEffect, useState } from 'react'
import Header from './component/Header'
import Content1 from './component/Content1'
import Content2 from './component/Content2'
import Content3 from './component/Content3'



export const Main2 = () => {

  const [movies,setMovies]= useState(null)
   
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzk4YzBkNmEyNTVhMjFmMzdjODg0MjBkMTdlZjkwZSIsInN1YiI6IjY2NTU4YmU4YTI2NDkzNzhjYjFjYmIyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pRw_xJRS2ffKh-lRJju9r5UUrkVwrUS8Tsqabnp9A_o'
    }
  };
   
  useEffect(()=>{

    const apiUrl= 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

    fetch(apiUrl,options)
    .then(res=>res.json())
    .then(json=>setMovies(json.results))
    .catch(e=>alert(e.message))
   
    
  },[])

  // 포스터경로가 오기에 기본 주소가 필요함
  // 기본경로: https://image.tmdb.org/t/p/크기/포스터경로
  // 크기 : /w400
  // 포스터 경로: /z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg
 

  return (
    <div>

      <Content1/>
      <Content2/>
      {
        movies ? <Content3 movies={movies}/> : <p>LOADING...</p>
      }

    </div>
  )
}

export default Main2
