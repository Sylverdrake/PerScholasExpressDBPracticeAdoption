import React from "react";

function CatsEdit(props) 
{
const cat = props.cats
return (
    <div>
    <form action={`/cats/${cat._id}?_method=PUT`} method="POST">
        Name:{" "}
        <input type="text" name="name" defaultValue={cat.name} />
        <br/>
        Age:{" "}
        <input type="number" name="age" defaultValue={cat.age} />
        <br/>
        Sex:{" "}
        <input type="text" name="sex" defaultValue={cat.sex} />
        <br/>
        Description:{" "}
        <input type="text" name="description" defaultValue={cat.description} />
        <br/>
        Breed:{" "}
        <input type="text" name="breed" defaultValue={cat.breed} />
        <br/>
        Had First Checkup:
        {cat.hadFirstCheckUp ? (<input type="checkbox" name="hadFirstCheckUp" defaultChecked />) : (<input type="checkbox" name="hadFirstCheckUp" />
        )}
        <br/>
        <input type="submit" value="Submit Changes"/>
    </form>
    </div>
);
}

export default CatsEdit;

