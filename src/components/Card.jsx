import React, { useState } from 'react'
import './style.css'
import axios from 'axios'

function Card({  pokemon , loading }) {
  const [openPopUp,setOpenPopUp] = useState(false)
  const [pokemonDetails,setPokemonDetails] = useState([])

  const handlePopUp = async(id) => {
    setOpenPopUp(true)
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    console.log(response.data)
    setPokemonDetails(response.data)
    
  }
  return (
    <>
    {
      loading ? <h1>Loading...</h1> : 
      pokemon.map((item) => {
        return (
          <>
          <div className='flex items-center border-2 rounded-2xl justify-between p-2 box-border' key={item.id} onClick={() => handlePopUp(item.id)} >
            <h2>{item.id}</h2>
            <img src={item.sprites.front_default} alt="" className='h-28 w-28 ' />
            <h2>{item.name}</h2>
          </div>
          {openPopUp && (
            <div className='popup'>
              <button onClick={() => {
                setOpenPopUp(false);
              }}>Close</button>
              {
                pokemonDetails.name ? (
                <div className='flex flex-col gap-10'>
                  <div className='flex items-center justify-center gap-10'>
                    <h2 className='font-bold'>{pokemonDetails.name}</h2>
                    <span>{pokemonDetails.height}</span>
                    <span>{pokemonDetails.weight}</span>
                    <span>{pokemonDetails.types[0].type.name}</span>
                  </div>
                  <div className='flex items-center justify-center gap-10'>
                    <img src={pokemonDetails.sprites.other.dream_world.front_default} alt="" className='h-28 w-28' />
                    <div className='progress'>
                      {/* {
                        pokemonDetails.stats.forEach((stats) => {
                          <div className="progress-bar" style={{ width: `${stats.base_stat}%` }}>{stats.name}</div>
                        })
                      }   */}
                      <div className="progress-bar" style={{ width: `${pokemonDetails.stats[0].base_stat}%` }}>HP</div>
                      <div className="progress-bar" style={{ width: `${pokemonDetails.stats[1].base_stats}%`}}>ATTACK</div>
                      <div className="progress-bar" style={{ width: `${pokemonDetails.stats[2].base_stats}%`}}>DEFENCE</div>
                      <div className="progress-bar" style={{ width: `${pokemonDetails.stats[3].base_stats}%`}}>SPECIAL-ATTACK</div>
                      <div className="progress-bar" style={{ width: `${pokemonDetails.stats[4].base_stats}%`}}>SPECIAL-DEFENCE</div>
                      <div className="progress-bar" style={{ width: `${pokemonDetails.stats[5].base_stats}%`}}>SPEED</div>
                    </div>
                  </div>
                </div>
                ) : ("")
              }
            </div>
          )}
          </>
        )
      })
    }
    </>
  )
}

export default Card;




// {/* <div className='flex items-center justify-center'>
//   <h2>{pokemonDetails.name}</h2>
//   <h2>{pokemonDetails.height}</h2>
//   <h2>{pokemonDetails.weight}</h2>
//   <h2>{pokemonDetails.types[0].type.name}</h2>
// </div>
// <div>
//   <img src={pokemonDetails.sprites.other.dream_world.front_default} alt="" className='h-28 w-28' />
//   <h1>Manih</h1>
// </div>                 */}



