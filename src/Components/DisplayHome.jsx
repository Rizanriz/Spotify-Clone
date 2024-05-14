import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem' 

function DisplayHome() {
  return (
    <div>
        <Navbar/>
        <div className="mb-4">
          <h1 className='font-bold text-2xl my-5'>Featured Charts</h1>
          <div className='flex overflow-auto p-2 '>
          {
          albumsData.map((item,index)=>(<AlbumItem key={index} name={item.index} desc={item.desc} id={item.id} image={item.image}/>))
          }
          </div>
        </div>
        <div className="mb-4">
          <h1 className='font-bold text-2xl my-5'>Today Biggest Hits</h1>
          <div className='flex overflow-auto'>
          {
            songsData.map((item,index)=>(<SongItem key={index} name={item.index} desc={item.desc} id={item.id} image={item.image}/>))
          }
          </div>
        </div>
    </div>
  )
}

export default DisplayHome