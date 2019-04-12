import React, { Component } from 'react';
import './Tracks.css';

class Tracks extends Component {
    state = {
        playing: false,
        playAudio: null,
        playingPreviewUrl: null,

    }

    playAudio = (previewUrl) => {
        const playAudio = new Audio(previewUrl);

        if (!this.state.playing) {
            playAudio.play();
            this.setState({ playing: true, playAudio })
        } else {
            this.state.playAudio.pause();

            if (this.state.playingPreviewUrl === previewUrl) {
                this.setState({ playing: false })
            } else {
                playAudio.play();
                this.setState({ playAudio, playingPreviewUrl: previewUrl })

            }
        }
    }
    render() {
        console.log(this.props.tracks)

        const { tracks } = this.props;
        return (
            <div>
                {tracks.map(track => {
                    return (
                        <div 
                            className='tracks' 
                            key={track.id} 
                            onClick={() => this.playAudio(track.album.preview_url)}>
                            <img 
                                src={track.album.images[0].url} 
                                alt='ablum-images' 
                                className='tracks-image'
                                />
                            <h5 className='tracks-name'>{track.name}</h5>
                        </div>
                    )
                })}

            </div>
        );
    }
}

export default Tracks;