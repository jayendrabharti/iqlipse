import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

export function Gallery({images}) {
    

    return (

    <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
        elementClassNames='columns-2 sm:columns-3 lg:columns-4 gap-x-2'
        >

        {images.map((image, index) => {
            return (
                <a 
                    href={image.src} 
                    key={index}
                >
                    <img 
                        alt={image.alt} 
                        src={image.src} 
                        className='max-w-full w-full block py-1.5 px-0 rounded-2xl transition-all duration-200 hover:brightness-75 hover:scale-105'
                    />
                </a>
            )
        })}

    </LightGallery>
    );
}