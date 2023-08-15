import React from "react";

function CatsShow(props) {
  const cat = props.cats;
  return (
    <div>
      <h1>ShowPage</h1>
      <nav><a href='http://localhost:3000/cats'>Back</a></nav>
      <h3>
        {" "}
        {cat.name} is {cat.age} years old and {cat.sex}.
        They are a {cat.breed}.
      </h3>

      <h4>
        {cat.description}
      </h4>
      <h1>{cat.hadFirstCheckUp ? "This cat has been checked by a Vet!" : "This cat has not been checked by a Vet."}</h1>
    </div>
  );
}

export default CatsShow;

