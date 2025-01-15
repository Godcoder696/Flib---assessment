'use client'
import React, { ReactElement, ReactNode, useState } from 'react';

interface ImageZoomProps {
    children: ReactNode;
    animationDuration?: number;
    zoomEnabled?: boolean;
    zoomSize?: number;
}

const ImageZoom: React.FC<ImageZoomProps> = ({
    children,
    animationDuration = 0.3,
    zoomEnabled = true,
    zoomSize = 1.2,
    ...props
}) =>  {

    const [zoomed, setZoomed]= useState(false);
    let overlay=document.createElement("div");
    let image:HTMLElement;

    // overlay initialization
    function createOverlay(){
        overlay.classList.add("overlay");
        overlay.style.transition = animationDuration+'s ease-out opacity'
        overlay.style.pointerEvents = 'none'

        document.body.appendChild(overlay)
    }

    const toggleZoom=()=>{
        // check
        if(zoomed){
            zoomOut();
            setZoomed((prev)=>!prev);
            return ;
        }

        // calculating the new height & width for image according to given zoomSize (scale)
        const rect = image.getBoundingClientRect()
        const newWidth = image.clientWidth * zoomSize
        const newHeight = image.clientHeight * zoomSize

        // calculating best transform for animation
        image.style.transform = `
            translate(
                ${-rect.left + window.innerWidth / 2 - newWidth / 2}px,
                ${-rect.top + window.innerHeight / 2 - newHeight / 2}px) 
                scale(${zoomSize}
            )
        `
        image.style.zIndex = '2'
        image.style.position = 'relative'
        image.style.cursor = 'zoom-out'
        setZoomed((prev)=>!prev)
        overlay.style.opacity = '0.3'
        overlay.style.pointerEvents = ''
        overlay.style.zIndex = '1'
    }

    const handleImgLoad=(e:any)=>{
        // intiazlizing overlay
        overlay.addEventListener('click', zoomOut)
        createOverlay();
        setZoomed(false);

        // initializing image props
        image= e.target;
        image.addEventListener('click', toggleZoom)
        window.addEventListener('scroll', zoomOut)
        image.style.transition = animationDuration+'s ease-out transform'
        image.style.transformOrigin = 'left top'
        image.style.cursor = 'zoom-in'
        image.addEventListener('transitionend', () => {
            if (!zoomed) {image.style.zIndex = ''}
        })
        
    }

    // properties for zoom out
    const zoomOut=()=>{
        overlay.style.opacity = '0'
        overlay.style.pointerEvents = 'none'
        image.style.transform = ''
        image.style.cursor = 'zoom-in'
    }
  
    return (
        <>
            <div onLoad={(e)=>{zoomEnabled && handleImgLoad(e)}}>
                <span className='target-img'>{React.cloneElement(children as React.ReactElement, { ...props })}</span>
            </div>
        </>
    );
  };

export default ImageZoom;