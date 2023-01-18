import React from 'react'
import Title from './Title'
import Button from './Button'
import GalleryContents from './GalleryContents'
import Satu from '../assets/avatar.png'

export default function Gallery() {
  return (
    <div className="container mx-auto w-10/12 pt-16 " id='Gallery' >
      <div  className="MyGallery flex flex-col items-center min-h-screen   mx-auto">
        <Title primary={"My"} secondary={"Gallery"} />
		<div className="content grid lg:grid-cols-4 gap-2 rounded-2xl   mx-auto md:grid-cols-2 sm:grid-cols-1 ">
			<GalleryContents Image1={Satu} />
			<GalleryContents Image1={Satu} />
			<GalleryContents Image1={Satu} />
			<GalleryContents Image1={Satu} />
			<GalleryContents Image1={Satu} />
			<GalleryContents Image1={Satu} />
			<GalleryContents Image1={Satu} />
			<GalleryContents Image1={Satu} />
		</div>
		<div/>
      </div>
    </div>
  );
}
