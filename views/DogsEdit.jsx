import React from "react";

function DogsEdit(props) 
{
const dog = props.dogs
return (
    <div>
    <form action={`/dogs/${dog._id}?_method=PUT`} method="POST">
        Name:{" "}
        <input type="text" name="name" defaultValue={dog.name} />
        <br/>
        Age:{" "}
        <input type="number" name="age" defaultValue={dog.age} />
        <br/>
        Sex:{" "}
        <input type="text" name="sex" defaultValue={dog.sex} />
        <br/>
        Description:{" "}
        <input type="text" name="description" defaultValue={dog.description} />
        <br/>
        Breed:{" "}
        <input type="text" name="breed" defaultValue={dog.breed} />
        <br/>
        Had First Checkup:
        {dog.hadFirstCheckUp ? (<input type="checkbox" name="hadFirstCheckUp" defaultChecked />) : (<input type="checkbox" name="hadFirstCheckUp" />
        )}
        <br/>
        <input type="submit" value="Submit Changes"/>
    </form>
    </div>
);
}

export default DogsEdit;

