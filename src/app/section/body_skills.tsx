import Image from "next/image";
import CustomHeaderWithLine from "../element/base_element/custom_header_with_line";
import CustomLoopScroll from "../element/base_element/custom_loop_scroll";
import { useWindowWidth } from "../global_data/window_size_context";

export default function BodySkills() {

  const skillsDetail = [
    {
      skill: "Flutter", 
      image: "/images/tech-stack/flutter.png"
    },
    {
      skill: "Nextjs", 
      image: "/images/tech-stack/nextjs.png"
    },
    {
      skill: "Vue", 
      image: "/images/tech-stack/vue.png"
    },
    {
      skill: "Laravel", 
      image: "/images/tech-stack/laravel.png"
    },
    {
      skill: "Typescript", 
      image: "/images/tech-stack/typescript.png"
    },
    {
      skill: "Tailwind", 
      image: "/images/tech-stack/tailwind.png"
    },
    {
      skill: "Javascript", 
      image: "/images/tech-stack/javascript.png"
    },
    {
      skill: "CSS", 
      image: "/images/tech-stack/css.png"
    },
    {
      skill: "HTML", 
      image: "/images/tech-stack/html.png"
    },
    {
      skill: "Firebase", 
      image: "/images/tech-stack/firebase.png"
    },
    {
      skill: "Supabase", 
      image: "/images/tech-stack/supabase.png"
    },
  ];

  const windowSize = useWindowWidth();

  return (
    <section className="w-full space-y-6">
      <CustomHeaderWithLine text={"Skills"} />
      <CustomLoopScroll style="justify-center-safe">
        {
          skillsDetail.map((el) => (
          <div className="bg-light-surface-container-low dark:bg-dark-surface-container-low min-w-[125px] md:min-w-[200px] h-10 mr-4 mb-1 py-2 px-3 box-border rounded-[20px] border-[1.5px] border-light-inverse-surface dark:border-dark-inverse-surface shadow-[4px_4px_0_rgba(53,53,53,1)] dark:shadow-[4px_4px_0_rgba(210,210,210,1)] flex flex-row gap-2 items-center-safe justify-items-center-safe" key={el.skill}>
            <Image
              aria-hidden
              className="max-w-7 max-h-6 object-scale-down md:ml-2"
              src={el.image}
              alt="Globe icon"
              width={40}
              height={40}
            />
            {
              windowSize!.windowWidth >= 768
                ? <p className="md-typescale-title-medium !font-normal w-full text-center text-light-inverse-surface dark:text-dark-inverse-surface">
                    {el.skill}
                  </p>
                : <p className="md-typescale-title-small !font-normal w-full text-center text-light-inverse-surface dark:text-dark-inverse-surface">
                    {el.skill}
                  </p>
            }
          </div>
          ))
        }
      </CustomLoopScroll>
    </section>
  );
}