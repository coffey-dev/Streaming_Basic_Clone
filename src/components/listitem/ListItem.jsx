import React from 'react';
import "./listItem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import { useState } from "react";
import ReactPlayer from "react-player";

export default function ListItem({index}) {

// Coloca cada uno de los items en un lugar correcto al posar el mouse sobre el item en cuestión //  
const [isHovered, setIsHovered] = useState(false);

const trailer =
"https://www.youtube.com/watch?v=AXRAdmJvzcs";




  return (
    <div className='listItem'
    style={{left : isHovered && index * 225 - 50 + index * 2.5}} 
    onMouseEnter={() =>setIsHovered(true)} 
    onMouseLeave={() =>setIsHovered(false)}
    >
<img src='https://media.istockphoto.com/id/1191001701/photo/popcorn-and-clapperboard.jpg?s=612x612&w=0&k=20&c=iUkFTVuU8k-UCcZDxczTWs6gkRa0nAMihp2Jf_2ASKM=' alt='' />

{isHovered && (

<React.Fragment>
<ReactPlayer
          className='react-player'
          url={trailer}
          playing={true}
         loop={true}
         muted={true}

        />
<div className='itemInfo'>
  <div className='icons'>
<PlayArrowIcon />
<AddIcon />
<ThumbUpOutlinedIcon />
<ThumbDownOffAltOutlinedIcon />
  </div>

  <div className='itemInfoTop'>
    <span>1 hour 14 mins</span>
    <span className='limit'>+16</span>
    <span>1999</span>
  </div>

  <div className='dec'>nulla, commodi saepe aspernatur dolore pariatur impedit lksdajfñlaksdfj añsdfjkañlsdfkj alñsdfjñlaksdfjñal fñalskdjfñlaksdfj fñalskdjfñlaksdfj
  </div>
  <div className='genre'>Action</div>
</div>
</React.Fragment>
)}




</div>
  );
}
