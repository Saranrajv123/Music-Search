import React from 'react';

const Artist = ({ artist }) => {
    if (!artist) return null;
    console.log(artist)

    const { name, images, genres, followers } = artist;
    return (
        <div>
            <h4>Name: {name}</h4>
            <h6>{followers.total} Followers</h6>
            <p>Genres: {genres}</p>
            <img 
                src={images[0] && images[0].url} 
                alt='profile-pics' 
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,

                }}
                
            />
        </div>
    );
};

export default Artist;