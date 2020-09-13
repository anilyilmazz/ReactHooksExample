import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

function SongList() {
    const [newSong,setNewSong] = useState('');
    const [songs,setSongs] = useState([
        {title : 'tarkan',id :  1},
        {title : 'serdar',id :  2},
        {title : 'manga',id :  3},
    ])
    const addSongSameComp = () =>{
        setSongs([...songs,{title : newSong,id : uuidv4()}])
        setNewSong('');
    }
    const addSongDiffComp = (title) =>{
        setSongs([...songs,{title : title,id : uuidv4()}])
        setNewSong('');
    }
    return (
        <div className = "song-list">
            <ul>
                {songs.map(song =>{
                    return(<li key = {song.id}>{song.title}</li>)
                })}
            </ul>
            <label>With Same Comp</label>&nbsp;
            <input value = {newSong} onChange={e => setNewSong(e.target.value)}></input>
            <button onClick={addSongSameComp}>Add a Song</button>
            <hr/>
            <NewSongForm addSong = {addSongDiffComp}/>
        </div>
    )
}

export default SongList
