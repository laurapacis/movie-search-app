import React from 'react'
import '../App.css';

function Search(props) {
    const onChange = (e) => {
        console.log(e.target.value);
        props.changeHandler(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.submitHandler()
        
    }

    return (
        <div>
            <form onSubmit= {onSubmit}>
                <input type="text" name="search" onChange= {onChange} />
                <button type="submit">Search movie</button>
            </form>
        </div>
    )
}

export default Search
