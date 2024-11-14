import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import axios from "../utils/axios";
import Header from './partials/Header';

function Home() {
    document.title = "MOVIE APP"
    const [wallpaper, setWallpaper] = useState("");
    
    const GetWallpaper = async () => {
      try {
        const { data } = await axios.get(`/trending/all/day`);
        let randomdata = data.results[Math.floor(Math.random() * data.results.length)];
        setWallpaper(randomdata);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    useEffect(()=>{
      !wallpaper && GetWallpaper()
    },[])
  
  return (
    <>
    <Sidenav />
    <div className='w-[80%] h-screen '>
        <Topnav />
        <Header data={wallpaper} />
    </div>
    </>
  ) 
}

export default Home