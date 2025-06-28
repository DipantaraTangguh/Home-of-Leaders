import Navbar from "../../components/Layouts/Navbar";
import { ProfileAlumniData } from "../../assets/data/ProfileAlumniData";
import Container from "../../components/Layouts/Container";
import {
  ProfileSelfDataForm,
  ProfileHeader,
  ProfilePlacementDataForm,
  ProfileProfessionalExperience,
  ProfileInvolvementAchievement,
} from "../../components/Fragments/ProfileSection";
import { Footer } from "../../components/Layouts/Footer";

export default function ProfileDataAlumniPage() {
  return (
    <main>
      {/* <Navbar /> */}
      <Container>
        <h2 className="text-[#0D4690] text-3xl font-bold mb-2 pb-10 pt-5">
          Data Alumni
        </h2>
        {ProfileAlumniData.map((profile, index) => (
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
      </Container>
      {/* <Footer /> */}
    </main>
  );
}
