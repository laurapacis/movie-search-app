import React from 'react'
import '../App.css';

function Search(props) {
    const onChange = (e) => {
        console.log(e.target.value);
        props.changeHandler(e.target.value)
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        props.submitHandler()
        
    }
    // const clickHandler = (e) => {
    //     console.log(e.target.innerHTML);
        
    // }
    return (
        <div>
            {/* <div name="parentDiv" onClick = {clickHandler} style={{ width:"200px", height:"200px" ,background:"red" , margin:"10px"}}>
                <h1 name="LAura"> Hello Laura</h1>
                <b name="MAnsour"> this is Mansour </b>
            </div> */}
            <form onSubmit= {onSubmit}>
                <input type="text" name="search" onChange= {onChange} />
                <button type="submit">Search movie</button>
            </form>
        </div>
    )
}

export default Search
