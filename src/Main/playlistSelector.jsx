import React from 'react';
import { Button, ButtonGroup, ButtonToolbar, Label } from 'reactstrap';

const PlaylistSelector = (props) => {


    return (
        <>
        
        <ButtonToolbar>
          <ButtonGroup>
            {/* <Button><img src='/images/icons/Elves.png' />The Sounds of Pomodoria</Button>
            
            <Button>The Popular Music of Metro Pomodoria</Button>
            <Button>Clinical Sounds of the Unallowed</Button>
            <Button>Just Jazz</Button>
            <Button>The music of our people</Button>
             */}

             {props.playlists.map(playlist=> <Button key={playlist.text} onClick={()=>props.addPlaylist(playlist.url)}><img src={playlist.img} /> {playlist.text}</Button>)}
          </ButtonGroup>
        </ButtonToolbar>
        </>
      );

}

export default PlaylistSelector

PlaylistSelector.defaultProps={
    playlists:[
        {text: "The Chill of the Pine Needles", url: "https://api.soundcloud.com/playlists/300494469", img:"/images/icons/Elves.png"},
        {text: "Dance to the Plastic Beat", url:"https://api.soundcloud.com/playlists/507603531" , img:"/images/icons/Fairies.png"},
        {text: "The Turnabout of Jewels", url:"https://api.soundcloud.com/playlists/52414201" , img:"/images/icons/Knights.png"},
        {text: "Tunes from Across the Sea", url:"https://api.soundcloud.com/playlists/345894538" , img:"/images/icons/Pirates.png"},
        {text: "The Concentration of the Liberated", url:"https://api.soundcloud.com/playlists/157728170" , img:"/images/icons/Trolls.png"},
        {text: "Otherworldly Notes from the Raven Queen", url:"https%3A//api.soundcloud.com/playlists/328549397" , img:"/images/icons/WW.png"}


    ]
}
