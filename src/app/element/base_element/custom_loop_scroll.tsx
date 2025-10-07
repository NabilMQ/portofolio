"use client";

import React from "react";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from "embla-carousel-auto-scroll";

export default function CustomLoopScroll({children, style} : {children : React.ReactNode; style? : string}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: true,
    axis: 'x',
  }, [
    AutoScroll({ 
      playOnInit: true,
      speed: 0.5,
    })
  ]);
  const autoScroll = emblaApi?.plugins()?.autoScroll;
  
  const onScrollInterrupted = () => {
    setTimeout(() => {
      autoScroll?.play();
    }, 1000);
  }

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className={`flex flex-row ${style}`} onClick={onScrollInterrupted} onMouseUp={onScrollInterrupted} onDragEnd={onScrollInterrupted} onMouseOver={onScrollInterrupted}>
        {children}
      </div>
    </div>
  );
}