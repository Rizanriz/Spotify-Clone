import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import { PlayerContext } from '../PlayerContext'

function DisplayAlbum() {

    const {id} = useParams()
    const albumData = albumsData[id]
    // console.log(albumData);

    const {playWithId} = useContext(PlayerContext)

  return (
    <>
        <Navbar/>
        <div className='mt-10 flex flex-col gap-8 md:flex-row md:items-end'>
            <img className='w-48 rounded' src={albumData.image} alt="" />
            <div className='flex flex-col'>
                <p>Playlist</p>
                <h1 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h1>
                <h4>{albumData.desc}</h4>
                <p className='mt-1 flex'>
                    <img className='inline-block w-5 me-3' src={assets.spotify_logo} alt="" />
                   <div className='flex gap-3'>
                   <b> Spotify </b>
                    .1,323,456.33 likes
                    <b>50 songs</b>
                    about 2 hrs 30 min
                   </div>
                </p>
            </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
            <p><b className='mr-4'>#</b>Title</p>
            <p>Album</p>
            <p className='hidden sm:block'>Date added</p>
            <img className='w-4 m-auto' src={assets.clock_icon} alt="" />
        </div>
        <hr />
        {
            songsData.map((item,index)=>(
                <div onClick={()=>playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                    <p className='text-white '>
                        <b className='mr-4 text-[#fffff2b]'>{index+1}</b>
                        <img className='inline w-10 mr-5' src={item.image} alt="" />
                        {item.name}
                    </p>
                    <p className='text-[15px]'>{albumData.name}</p>
                    <p className='text-[15px] hidden sm:block'>5 days ago</p>
                    <p className='text-[15px] text-center'>{item.duration}</p>
                </div>
            ))
        }
    </>
  )
}

export default DisplayAlbum