import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Myomdb from './Myomdb.module.css'

function MyOmdb() {
  let [searchd,setSearchd] = useState("")
  let [inputs,setInputs] = useState([])
  useEffect(()=> {
    getApi()
  },[])
  
  let apiKey = `http://www.omdbapi.com/?s=${searchd}&apikey=3bb89d7e`
  async function getApi(){
    let response = await axios.get(apiKey)
    setInputs(response.data.Search || [])
    console.log(response.data.Search);
  } 

  let getInputData = ({target:{value}})=> {
    setSearchd(value)
  }
  
  let FormData = (e)=> {
    e.preventDefault()
    getApi() 
  }

  return (
    <div>
      <div>
        <nav>
          <form action="" onSubmit={FormData}>
            <input type="text" placeholder='enter you data' onChange={getInputData}/>
            <button type='submit'>Search</button>
          </form>
        </nav>
      </div>
      <div className={MyOmdb.cardContainer}>
      {inputs.map(({Poster,Title,Year,imdbID}) => {
        return <div key={imdbID} className={Myomdb.cards}>
          <img src={Poster} alt={Title} />
          <h2>{Title}</h2>
          <h4>{Year}</h4>
        </div>
      })}
    </div>
    </div>
  )
}

export default MyOmdb