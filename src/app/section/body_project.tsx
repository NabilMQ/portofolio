import CustomHeaderWithLine from "../element/base_element/custom_header_with_line";
import Project from "../element/specific_element/project";

export default function BodyProject() {

  return (
    <section className="w-full space-y-6" id="Projects">
      <CustomHeaderWithLine text={"Projects"} />
      <div className="max-w-[1280px] xl:mx-auto md:px-[72px] px-4 flex flex-wrap gap-6 items-center justify-center-safe">
        <Project 
          projectImagePath={"/images/projects/sirene.png"}
          projectName={"SiRene"}
          projectDescription={"An application where user can use it as an All-In-One Emergency App, to call Police, Ambulance, and Firefighter. Successfully become the Global Top 100 Finalist in GDSC Solution Challenge 2024"}
          projectTechStackImages={["/images/tech-stack/flutter.png", "/images/tech-stack/firebase.png"]}
        />

        <Project
          projectImagePath={"/images/projects/personal-portofolio.png"}
          projectName={"Personal Portofolio"}
          projectDescription={"My Own Website Portofolio. There is the Flutter version and the Nextjs Version"}
          projectTechStackImages={["/images/tech-stack/flutter.png", "/images/tech-stack/nextjs.png"]}
        />
      </div>
    </section>
  );
}