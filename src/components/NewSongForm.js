import React, { useState }  from 'react'

function NewSongForm({addSong}) {
    const [title, setTitle] = useState('');
    const handleSubmit= (e) =>{
        e.preventDefault();
        console.log(title);
        addSong(title);
        setTitle('');
    }
    return (
        <form onSubmit ={handleSubmit}>
            <label>Different Comp</label>&nbsp;
            <input type = 'text' value = {title} required onChange= {(e) => setTitle(e.target.value)}></input>
            <input type = 'submit' value = 'Add Song'></input>
        </form>
    )
}

export default NewSongForm
