import { useParams } from "react-router-dom";
import CodingClub from "./Clubs/Coding_club/CodingClub";
import RoboticClub from "./Clubs/Robotic club/RoboticClub";
import GateClub from "./Clubs/Gate_club/GateClub";
import GamingClub from "./Clubs/Gaming_club/GamingClub";
import AutocadClub from "./Clubs/Autocad_club/AutocadClub";
import HackthonClub from "./Clubs/Hackthon_club/HackthonClub";
import TNPClub from "./Clubs/TNP_club/TNP_club";
import SportClub from "./Clubs/Sport_club/SportClub";
import AutomobileClub from "./Clubs/Automobile_club/AutomobileClub";
import MaintenanceClub from "./Clubs/Maintenance_club/MaintenanceClub";
import AiIotClub from "./Clubs/AI & IOT_club/AiIotClub";
import CulturalClub from "./Clubs/Cultural_club/CulturalClub";
import PosterClub from "./Clubs/Poster Club/PosterClub";  

const clubComponents = {
  coding: CodingClub,
  robotic: RoboticClub,
  gate: GateClub,
  gaming: GamingClub,
  autocad: AutocadClub,
  hackthon: HackthonClub,
  sport: SportClub,
  automobile: AutomobileClub,
  maintenance: MaintenanceClub,
  placement: TNPClub,
  iot:AiIotClub,
  cultural:CulturalClub,
  poster:PosterClub,
};

const ClubDetails = () => {
  const { clubName } = useParams();
  const ClubComponent = clubComponents[clubName?.toLowerCase()];

  if (!ClubComponent) {
    return <h2 className="text-center mt-10 text-red-600">Club not found</h2>;
  }

  return <ClubComponent />;
};

export default ClubDetails;
