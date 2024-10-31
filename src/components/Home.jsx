import React from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'

function Home() {
    document.title = "MOVIE APP"
  return (
    <>
    <Sidenav />
    <div className='w-[80%] h-screen '>
        <Topnav />
    </div>
    </>
  )
}

export default Home