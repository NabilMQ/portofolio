import Image from "next/image";
import TrophyIcon from "../svg_element/trophy";
import CalendarTodayIcon from "../svg_element/calendar_today";
import { useWindowWidth } from "@/app/global_data/window_size_context";

export default function Achievement({
  competitionImagePath,
  achievementsAndRoles,
  period,
  workDescription,
} : {
  competitionImagePath: string;
  achievementsAndRoles: string;
  period: string;
  workDescription: string[];
}) {

  const windowSize = useWindowWidth();

  return (
    <div className="flex flex-col md:gap-8 gap-4 w-full">
      <div className="flex md:flex-row flex-col md:justify-start justify-center-safe items-center-safe gap-8">
        <Image
          className="min-w-[120px] min-h-[120px] rounded-[20px] relative z-10 border-[1.5px] border-light-inverse-surface dark:border-dark-inverse-surface shadow-[4px_4px_0_rgba(53,53,53,1)] dark:shadow-[4px_4px_0_rgba(210,210,210,1)]"
          aria-hidden
          src={competitionImagePath}
          alt="Globe icon"
          width={120}
          height={120}
        />

        <div className="flex flex-col md:gap-3 justify-center">
          <div className="flex flex-row gap-4">
            <TrophyIcon className="fill-light-inverse-surface dark:fill-dark-inverse-surface min-w-6 min-h-6 md:inline-block hidden"/>
            {
              windowSize!.windowWidth >= 768
                ? <p className="md-typescale-title-large text-justify mx-auto text-light-inverse-surface dark:text-dark-inverse-surface">
                    {achievementsAndRoles}
                  </p>
                : <p className="md-typescale-title-small !font-normal mx-auto text-center text-light-inverse-surface dark:text-dark-inverse-surface">
                    {achievementsAndRoles}
                  </p>
            }
          </div>

          <div className="flex flex-row gap-4 md:items-start md:justify-start items-center-safe justify-center-safe">
            <CalendarTodayIcon className="fill-light-inverse-surface dark:fill-dark-inverse-surface md:inline-block hidden" />
            {
              windowSize!.windowWidth >= 768
                ? <p className="md-typescale-title-medium !font-normal text-justify text-light-inverse-surface dark:text-dark-inverse-surface">
                    {period}
                  </p>
                : <p className="md-typescale-title-small !font-normal mx-auto text-center text-light-inverse-surface dark:text-dark-inverse-surface">
                    {period}
                  </p>
            }
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {
          workDescription.map(desc => (
            windowSize!.windowWidth >= 768
              ? <div key={desc} className="flex flex-row">
                  <p className="md-typescale-label-large !font-normal text-light-inverse-surface dark:text-dark-inverse-surface">
                    •&nbsp;
                  </p>
                  <p className="md-typescale-label-large !font-normal text-light-inverse-surface dark:text-dark-inverse-surface">
                    {desc}
                  </p>
                </div>
              : <div key={desc} className="flex flex-row">
                  <p className="md-typescale-label-medium !font-normal text-light-inverse-surface dark:text-dark-inverse-surface">
                    •&nbsp;
                  </p>
                  <p className="md-typescale-label-medium !font-normal text-light-inverse-surface dark:text-dark-inverse-surface">
                    {desc}
                  </p>
                </div>
          ))
        }
      </div>
    </div>
  );
}