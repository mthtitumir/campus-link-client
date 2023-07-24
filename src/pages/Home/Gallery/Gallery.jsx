import React from 'react';
import Heading from '../../../components/Heading';
import { PhotoAlbum } from 'react-photo-album';

const Gallery = () => {
    const photos = [
        {
            src: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg', width: 800, height: 600
        },
        {
            src: 'https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg', width: 800, height: 600
        },
        {
            src: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg', width: 800, height: 600
        },
        {
            src:'https://images.pexels.com/photos/2293027/pexels-photo-2293027.jpeg', width: 800, height: 600
        },
        {
            src: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg', width: 800, height: 600
        },
        {
            src:'https://images.pexels.com/photos/2513993/pexels-photo-2513993.jpeg', width: 800, height: 600
        }
    ]
    return (
        <div>
            <Heading title="Gallery" subtitle="Graduation Party Gallery" />
            <PhotoAlbum layout='rows' photos={photos} />
        </div>
    );
};

export default Gallery;