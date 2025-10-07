import CustomHeaderWithLine from "../element/base_element/custom_header_with_line";
import Achievement from "../element/specific_element/achievement";

export default function BodyAchievement() {
  const gdscSolutionChallengeWorkDescription = [
    'Develop "Si Rene" as Mobile Application using Flutter, an application where user can use it as an All-In-One Emergency App',
    'Working in the team as a Hacker and collaborating with other roles to develop',
    'Developed "Si Rene" with Flutter, Firebase, using Cloud Firestore as a database and Firebase ',
    'Successfully developed many features such as In-App Maps with Route and Navigation and In-App Voice Calling',
  ];
  return (
    <section className="w-full space-y-6">
      <CustomHeaderWithLine text={"Achievements"} />
      <div className="max-w-[1280px] xl:mx-auto md:px-[72px] px-4 flex flex-wrap gap-6 items-center">
        <Achievement 
          competitionImagePath={"/images/achievements/gdsc_solution_challenge.jpeg"} 
          achievementsAndRoles={"Global Top 100 Finalist GDSC Solution Challenge 2024 (Mobile Developer)"}
          period={"April 2024"}
          workDescription={gdscSolutionChallengeWorkDescription}
        />
      </div>
    </section>
  );
}