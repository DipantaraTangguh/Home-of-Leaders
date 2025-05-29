import Navbar from "../components/Layouts/Navbar";
import profileData from "../assets/data/ProfileAlumniData";
import ResearchCenterContainer from "../components/Layouts/ResearchCenterContainer";
import {
  ProfileSelfDataForm,
  ProfileHeader,
  ProfilePlacementDataForm,
  ProfileProfessionalExperience,
  ProfileInvolvementAchievement,
} from "../components/Fragments/ProfileSection";
import { Footer } from "../components/Layouts/Footer";

export default function ProfileDataAlumniPage() {
  return (
    <main>
      <Navbar />
      <ResearchCenterContainer>
        <h2 className="text-[#0D4690] text-3xl font-bold mb-2 pb-10 pt-5">
          Data Alumni
        </h2>
        {profileData.map((profile, index) => (
          <ProfileHeader
            key={index}
            name={profile.name}
            program={profile.program}
            batch={profile.batch}
            year={profile.year}
            imageUrl={profile.imageUrl}
          />
        ))}
        <ProfileSelfDataForm />
        <ProfilePlacementDataForm />
        <ProfileProfessionalExperience />
        <ProfileInvolvementAchievement />
      </ResearchCenterContainer>
      <Footer />
    </main>
  );
}
