import React from "react";

function DogsShow(props) {
  const dog = props.dogs;
  return (
    <div>
      <h1>ShowPage</h1>
      <nav><a href='http://localhost:3000/dogs'>Back</a></nav>
      <h3>
        {" "}
        {dog.name} is {dog.age} years old and {dog.sex}.
        They are a {dog.breed}.
      </h3>

      <h4>
        {dog.description}
      </h4>
      <h1>{dog.hadFirstCheckUp ? "This dog has been checked by a Vet!" : "This dog has not been checked by a Vet."}</h1>
    </div>
  );
}

export default DogsShow;

