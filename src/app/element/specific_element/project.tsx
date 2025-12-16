import Image from "next/image";
import Link from "next/link";

export default function Project({
  projectImagePath,
  projectName,
  projectDescription,
  projectTechStackImages,
  // projectTechStackLoopDuration,
} : {
  projectImagePath: string
  projectName: string
  projectDescription: string
  projectTechStackImages: string[]
  // projectTechStackLoopDuration: String
}) {
  return (
    <div className="w-[300px] h-[400px] border-[1.5px] rounded-[20px] border-light-inverse-surface dark:border-dark-inverse-surface flex flex-col">
        <Image
          className="rounded-t-[20px]"
          aria-hidden
          src={projectImagePath}
          alt="Globe icon"
          width={300}
          height={137.5}
        />
      
      <div className="box-border p-3 flex flex-col grow justify-between gap-3">
        <div className="flex flex-col gap-2">
          <p className="md-typescale-headline-small text-center text-light-inverse-surface dark:text-dark-inverse-surface">
            {projectName}
          </p>
          {
           projectDescription == "My Own Website Portofolio. There is the Flutter version and the Nextjs Version" 
            ? <p className="md-typescale-body-small text-center text-light-inverse-surface dark:text-dark-inverse-surface">
                My Own Website Portofolio. There is the&nbsp;
                <Link className="hover:cursor-pointer underline" href="https://nabilmq-personal-portofolio.vercel.app/" target="_blank">Flutter version</Link>
                  &nbsp;and the&nbsp;
                <Link className="hover:cursor-pointer underline" href="https://nabilmq.my.id/" target="_blank">Nextjs version</Link>
              </p>
            : <p className="md-typescale-body-small text-center text-light-inverse-surface dark:text-dark-inverse-surface">
                {projectDescription}
              </p>
          }
        </div>

        <div className="flex flex-row gap-3">
          {
            projectTechStackImages.map(img => (
              <div key={img} className="relative flex flex-row items-center justify-center-safe w-10 h-10 rounded-full bg-light-surface-container-low dark:bg-dark-surface-container-low border-[1.5px] border-light-inverse-surface dark:border-dark-inverse-surface shadow-[4px_4px_0_rgba(53,53,53,1)] dark:shadow-[4px_4px_0_rgba(210,210,210,1)]">
                <Image
                  className="p-[6px] object-contain"
                  aria-hidden
                  src={img}
                  sizes="300px"
                  alt="Globe icon"
                  fill
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}