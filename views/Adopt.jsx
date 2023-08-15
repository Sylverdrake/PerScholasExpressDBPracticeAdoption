import React from 'react'

function Adopt() {
  return (
    <div>
      <div className='navBar'>
      <nav><a href='http://localhost:3000/'>Home</a></nav>
      <nav><a href='http://localhost:3000/adopt'>Adopt</a></nav>
      <nav><a href='http://localhost:3000/contact'>Contact</a></nav>
      </div>

        <div className='aniNav'>
        <nav><a href='http://localhost:3000/dogs'>Dogs</a></nav>
        <nav><a href='http://localhost:3000/cats'>Cats</a></nav>
        </div>
    </div>

  )
}

export default Adopt