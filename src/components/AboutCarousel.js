import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function AboutCarousel() {
    const images = [
        "https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/Burke%20Pro.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:870", "https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/pool%202.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:870", "https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/Ladder%20and%20rail%20installation.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:872", "https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/Zumwalt%20New.jpg/:/rs=w:1160,h:1160", "https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/Zumwalt%20spa.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:875", "https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/renovation%202.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:1159", "https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/5.jpg/:/rs=w:1160,h:870", "https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/2.jpg/:/rs=w:1160,h:870", "https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/62033232552__5BD0909A-9EAB-4FAF-8178-C5E502C1C.JPG/:/rs=w:2320,h:1740", "https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/IMG_1916.jpg/:/rs=w:2320,h:1740", "https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/Mills%201.jpg/:/cr=t:0%25,l:9.32%25,w:81.35%25,h:81.35%25/rs=w:1160,h:708", "https://img1.wsimg.com/isteam/ip/b9e96004-42fb-4242-b208-1ba222228f42/Spa%20Spillway.JPG/:/rs=w:1160,h:870"
    ]
    const [perPage, setPerPage] = useState(3);
    const [imageHeight, setImageHeight] = useState("100%");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 900) {
                setPerPage(1); // Change perPage to 1 when the window width is smaller than 600px
                setImageHeight("45vh")
            } else {
                setPerPage(3); // Reset perPage to 3 when the window width is larger than or equal to 600px
                setImageHeight("45vh")
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Splide aria-label="My Favorite Images"
                options={{
                    perPage: perPage,
                    rewind: true,
                    height: imageHeight,
                    gap: 5,
                    padding: 20,
                    lazyLoad: 'nearby',
                }}
            >
                {images.map((image, index) => {
                    return (
                        <SplideSlide>
                            <img
                                src={image} alt="Image 1"
                                style={{ "objectFit": "cover", height: "100%", width: "100%", borderRadius: 8 }}
                            />
                        </SplideSlide>
                    )
                })}
            </Splide>
        </>
    );
}