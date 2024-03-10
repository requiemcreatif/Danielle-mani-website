import React from "react";
import Image from "next/image";
import Danielle from "../../public/images/danielle_yoga.png";
import { Container, Box, Typography } from "@mui/material";
import SideContent from "../SideContent";
import {
  MainContentWrapper,
  MainTextContainer,
  SecondContainer,
} from "./styles";
import DanielleCoach from "../../public/images/danielle_mani_coach.svg";

const MainContent = () => {
  return (
    <Box>
      <Box bgcolor={"#000"}>
        <MainContentWrapper>
          <Box className="image-container">
            <Image
              src={Danielle}
              alt="Descriptive Text"
              width={300}
              height={400}
              objectFit="cover"
            />
          </Box>
          <MainTextContainer>
            <Typography>
              Pendant des années j’ai fais de l’athlétisme(vitesse/relais…)avant
              de passer mon <strong>diplôme d’état BEMF</strong> (Brevet des
              métiers de la forme). Ensuite, je me suis orientée vers la
              préparation physique générale pour les sportifs avant de me
              consacrer au coaching personnalisé, uniquement à domicile. Pour
              moi la remise en forme, <strong>le sport et le bien être</strong>{" "}
              incluent également le massage.
              <br />
            </Typography>
          </MainTextContainer>
        </MainContentWrapper>
      </Box>
      <SecondContainer>
        <Typography>
          <br /> Je me suis donc formée à différentes techniques :<br /> -le
          massage sportif pour aider à la récupération musculaire et
          l’élimination de l’acide lactique.
          <br />
          <br />- <strong>le drainage lymphatique</strong> qui est une technique
          de massage qui active la circulation de la lymphe dans le corps,
          réduit la rétention d’eau, améliore l’aspect de la peau et affine la
          silhouette. <br />
          <br />
          Selon les besoins et les attentes, j’établis un programme personnalisé
          d’entretien et de remise en forme alliant séances sportives et de
          massage. Pour plus de renseignements, vous pouvez me contacter au
          numéro de téléphone et adresse du site.
        </Typography>
        <SideContent />
      </SecondContainer>
    </Box>
  );
};

export default MainContent;
