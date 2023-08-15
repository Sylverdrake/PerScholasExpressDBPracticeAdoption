import React from 'react'

function Dogs(props) {
  const dog = props.dogs;
  return (
    <div>
      <div className='navBar'>
      <nav><a href='http://localhost:3000/'>Home</a></nav>
      <nav><a href='http://localhost:3000/adopt'>Adopt</a></nav>
      <nav><a href='http://localhost:3000/contact'>Contact</a></nav>
      </div>
    <div><a href='/dogs/new'>Add a New Dog</a></div>

{dog.map((dog, i) => {
return (
  <div key={i}>
    <a href={`/dogs/${dog._id}`}>
    <h2>{dog.name}</h2>
    </a>

<a href={`/dogs/${dog._id}/edit`}>Edit This Dog</a>

<form action={`/dogs/${dog._id}?_method=DELETE`} method="POST"  >
<input type="submit" value="DELETE"/>
</form>
</div>
);
})}
</div>
);
}
export default Dogs