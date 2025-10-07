import CustomHeaderWithLine from "../element/base_element/custom_header_with_line";
import Experience from "../element/specific_element/experience";

export default function BodyExperience() {
  const crackinCodeWorkDescription = [
    "Developing many application using Flutter as a main Framework",
    "Collaborate with other Developer, such as UI/UX Designer Back End, Project Manager, and other Mobile Developer",
    "Implementing features such as Authentication, In-App Maps with route and navigation, Firebase, Stream",
    "Using Provider and Bloc as State Management",
  ];

  const rotopowerWorkDescription = [
    "Developing Computerized Maintenance Management System (CMMS) to maintenance machine efficiency",
    "Contributing to developing the Landing Page",
    "Using NEXT.js as a main Framework",
    "Working with team, including Project Manager, Back-End Developer, UI/UX Designer, and other Front-End Developer.",
  ];

  return (
    <section className="w-full space-y-6" id="Experience">
      <CustomHeaderWithLine text={"Experience"} />
      <div className="max-w-[1280px] xl:mx-auto md:px-[72px] px-4 flex flex-wrap gap-6 items-center">
        <Experience 
          workDescription={crackinCodeWorkDescription} 
          companyImagePath={"/images/experience/crackin_code.jpeg"} 
          companyNameAndRoles={"Crackin'Code (Mobile Developer)"} 
          workingPeriod={"February 2025 - July 2025 (Internship)"} 
        />

        <Experience 
          workDescription={rotopowerWorkDescription} 
          companyImagePath={"/images/experience/rotopower.jpeg"} 
          companyNameAndRoles={"Rotopower DT (Front End Web Developer)"} 
          workingPeriod={"August 2024 - February 2025 (Part-time)"} 
        />
      </div>
    </section>
  );
}