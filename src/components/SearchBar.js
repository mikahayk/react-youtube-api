import React, { useState } from 'react'

export default function SearchBar( { handleFormSubmit }) {

    const [vidId, setVidId] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(vidId === '') {
            alert('Please enter a correct Youtube Video ID');
            return;
        }

        handleFormSubmit(vidId);

        // Clear input after submission
        setVidId('');
    }

    return (
        <form onSubmit={onSubmit} className="search_bar">
            <input name="query" type="text" value={vidId} placeholder="Paste your Youtube Video ID here" aria-label="Youtube Video ID" onChange={(e)=> setVidId(e.target.value)} />
            <button type="submit" value="Search"> Search </button>
        </form>
    )
}
