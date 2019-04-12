import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';


const API_ADRRESS = 'https://spotify-api-wrapper.appspot.com';

class MusicMain extends Component {
    state = {
        artist: '',
        artistName: null,
        tracks: [],
    }

    artistSearchHandler = (event) => {
        this.setState({ artist: event.target.value })
    }

    onKeyPressHandler = (event) => {
        if (event.key === 'Enter') {
            this.SearchHandler();
        }
    }

    SearchHandler = () => {
        console.log(this.state)
        fetch(`${API_ADRRESS}/artist/${this.state.artist}`)
            .then(response => response.json())
            .then(json => {
                if (json.artists.total > 0) {
                    const artistName = json.artists.items[0];
                    this.setState({ artistName });

                    fetch(`${API_ADRRESS}/artist/${artistName.id}/top-tracks`)
                        .then(response => response.json())
                        .then(json => this.setState({ tracks: json.tracks }))
                        .catch(error => alert(error.message))
                }
            }).catch(error => alert(error.message))
    }
    render() {
        return (
            <div>
                <input
                    placeholder='search artist'
                    onChange={this.artistSearchHandler}
                    onKeyPress={this.onKeyPressHandler}
                />
                <button onClick={this.SearchHandler}>Search</button>
                <Artist artist={this.state.artistName} />
                <Tracks tracks={this.state.tracks} />
            </div>
        );
    }
}

export default MusicMain;