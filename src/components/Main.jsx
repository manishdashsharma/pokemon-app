import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

function Main() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon=async(res)=>{
        res.map(async(item)=>{
           const result=await axios.get(item.url)
           setPokeData(state => {
            state = [...state, result.data]
            state.sort((a,b)=>a.id>b.id?1:-1)
            return state;
        })
    })
    }
     useEffect(()=>{
        pokeFun();
    },[url])

  return (
    <div className="flex flex-col m-6 items-center gap-6">
      <div className="grid grid-cols-5 gap-4">
        <Card pokemon={pokeData} loading={loading}/>
      </div>
      <div className="flex items-center justify-between flex-wrap">
        {prevUrl && (
          <button
            className="rounded-md bg-yellow-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-yellow-500"
            onClick={() => {
              setPokeData([]);
              setUrl(prevUrl);
            }}
          >
            Previous
          </button>
        )}
        {nextUrl && (
          <button
            className="rounded-md bg-green-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-green-500"
            onClick={() => {
              setPokeData([]);
              setUrl(nextUrl);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Main;
