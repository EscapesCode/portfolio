import React from 'react';
// import Image1 from '../assets/Avatar.png'
const GalleryContents = ({Image1}) => {
	return (
      <div className="rounded-xl bg-black ">
        <img src={Image1}  alt="" className='aspect-square'/>
      </div>

  );
}

export default GalleryContents;
