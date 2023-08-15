import React from 'react'

function Cats(props) {
  const cat = props.cats;
  return (
    <div>
      <div className='navBar'>
      <nav><a href='http://localhost:3000/'>Home</a></nav>
      <nav><a href='http://localhost:3000/adopt'>Adopt</a></nav>
      <nav><a href='http://localhost:3000/contact'>Contact</a></nav>
      </div>
    <div><a href='/cats/new'>Add a New cat</a></div>

{cat.map((cat, i) => {
return (
  <div key={i}>
    <a href={`/cats/${cat._id}`}>
    <h2>{cat.name}</h2>
    </a>

<a href={`/cats/${cat._id}/edit`}>Edit This Cat</a>

<form action={`/cats/${cat._id}?_method=DELETE`} method="POST"  >
<input type="submit" value="DELETE"/>
</form>
</div>
);
})}
</div>
);
}
export default Cats