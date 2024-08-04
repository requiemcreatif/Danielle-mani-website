"use client";

import React from "react";
import Image from "next/image";
import Danielle from "../../public/images/danielle_yoga.png";
import { Box, Typography, useTheme } from "@mui/material";
import SideContent from "../SideContent";
import {
  MainContentWrapper,
  ImageContainer,
  MainTextContainer,
  SecondContainer,
  CoachingList,
  CoachingItem,
} from "./styles";

const MainContent = () => {
  const theme = useTheme();

  return (
    <Box component="main">
      <Box
        bgcolor={theme.palette.primary.main}
        color={theme.palette.primary.contrastText}
        id="services"
      >
        <MainContentWrapper>
          <ImageContainer>
            <Image
              src={Danielle}
              alt="Danielle Mani practicing yoga"
              width={400}
              height={600}
              objectFit="cover"
            />
          </ImageContainer>
          <MainTextContainer>
            <Typography variant="h4" component="h2" gutterBottom>
              Mon Parcours
            </Typography>
            <Typography variant="body1">
              Passionnée de sports, j'ai pratiqué pendant de nombreuses années
              l'athlétisme (vitesse, relais, etc.) avant de décider de passer
              mon diplôme d'État <strong>BEMF</strong> (Brevet des métiers de la
              forme) et me consacrer à la{" "}
              <strong>préparation physique générale</strong> pour les sportifs.
            </Typography>
          </MainTextContainer>
        </MainContentWrapper>
      </Box>
      <SecondContainer>
        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            Mon Approche
          </Typography>
          <Typography variant="body1" paragraph>
            J'axe mon coaching personnalisé autour de trois éléments
            complémentaires:
          </Typography>
          <CoachingList>
            <CoachingItem>
              <Typography variant="h6" component="h3">
                La pratique physique
              </Typography>
            </CoachingItem>
            <CoachingItem>
              <Typography variant="h6" component="h3">
                La nutrition
              </Typography>
            </CoachingItem>
            <CoachingItem>
              <Typography variant="h6" component="h3">
                Le massage
              </Typography>
            </CoachingItem>
          </CoachingList>
        </Box>
        <SideContent />
      </SecondContainer>
    </Box>
  );
};

export default MainContent;
