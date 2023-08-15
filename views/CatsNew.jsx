import React from "react";

function CatsNew() {
  return (
    <div>
      <form action="/cats" method="POST">
        Name: <input type="text" name="name" />
        <br/>
        Age: <input type='number' name='age'/>
        <br/>
        Sex: <input type="text" name="sex" />
        <br/>
        Description: <input type='text' name='description'/>
        <br/>
        Breed: <input type='text' name='breed'/>
        <br/>
        Has had First Check-Up: <input type="checkbox" name="hadFirstCheckUp" />
        <br/>
        <input type="submit" name="" value="Add Cat" />
      </form>
    </div>
  );
}

export default CatsNew;

