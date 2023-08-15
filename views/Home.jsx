import React from 'react'

function Home() {
  return ( 
    <div>
      <link rel="stylesheet" type="text/css" href="style.css"/>
      <div className='navBar'>
      <nav><a href='http://localhost:3000/'>Home</a></nav>
      <nav><a href='http://localhost:3000/adopt'>Adopt</a></nav>
      <nav><a href='http://localhost:3000/contact'>Contact</a></nav>
      </div>

    </div>
  )
}

export default Home