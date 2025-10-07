import Image from "next/image";
import { useWindowWidth } from "../global_data/window_size_context";

export default function BodyBanner() {

  const windowSize = useWindowWidth();
  
  return (

    <section className="md:max-w-[1280px] md:mx-auto mx-4 mt-[24px] flex lg:flex-row flex-col items-center justify-center md:gap-16 gap-8" id="Home">
      <div>
        {/* <div className="w-[280px] h-[280px] bg-light-surface-dim dark:bg-dark-surface-dim rounded-full absolute z-0 mt-2 ml-2"></div> */}
        <Image
          onMouseOver={() => {console.log("hello")}}
          className="rounded-full z-10 relative shadow-[8px_8px_0_rgba(210,210,210,1)] dark:shadow-[8px_8px_0_rgba(17,17,17,1)]"
          aria-hidden
          unoptimized={false}
          fetchPriority="high"
          priority={true}
          quality={50}
          src="/images/me.jpg"
          alt="Globe icon"
          width={280}
          height={280}
        />
      </div>
      {
        windowSize!.windowWidth >= 768
          ? (
            <div className="flex flex-col space-y-1 line-clamp-1">
              <p className="md-typescale-headline-small lg:text-justify text-center text-light-inverse-surface dark:text-dark-inverse-surface">
                Hello!
              </p>
              <h1 className="md-typescale-display-small lg:text-justify text-center text-light-inverse-surface dark:text-dark-inverse-surface">
                I’m Nabil Mutawakkil Qisthi
              </h1>
              <h1 className="mt-2 md-typescale-display-small !font-[500] lg:text-justify text-center text-light-inverse-surface dark:text-dark-inverse-surface">
                Web and Mobile Developer
              </h1>
            </div>
          )
          : windowSize!.windowWidth >= 375
            ? (
              <div className="flex flex-col space-y-1 line-clamp-1">
                <p className="md-typescale-title-large lg:text-justify text-center text-light-inverse-surface dark:text-dark-inverse-surface">
                  Hello!
                </p>
                <h1 className="md-typescale-headline-medium lg:text-justify text-center text-light-inverse-surface dark:text-dark-inverse-surface">
                  I’m Nabil Mutawakkil Qisthi
                </h1>
                <h1 className="mt-2 md-typescale-headline-medium !font-[500] lg:text-justify text-center text-light-inverse-surface dark:text-dark-inverse-surface">
                  Web and Mobile Developer
                </h1>
              </div>
            )
            : (
              <div className="flex flex-col space-y-1 line-clamp-1">
                <p className="md-typescale-title-small lg:text-justify text-center text-light-inverse-surface dark:text-dark-inverse-surface">
                  Hello!
                </p>
                <h1 className="md-typescale-headline-small lg:text-justify text-center text-light-inverse-surface dark:text-dark-inverse-surface">
                  I’m Nabil Mutawakkil Qisthi
                </h1>
                <h1 className="mt-2 md-typescale-headline-small !font-[500] lg:text-justify text-center text-light-inverse-surface dark:text-dark-inverse-surface">
                  Web and Mobile Developer
                </h1>
              </div>
            )
      }
    </section>
  );
}