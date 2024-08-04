"use client";
import React from "react";
import Image from "next/image";
import Danielle from "../../public/images/danielle_yoga.png";
import { Box, Typography, useTheme } from "@mui/material";
import SideContent from "../SideContent";
import ContactForm from "../ContactForm";
import { motion } from "framer-motion";
import {
  MainContentWrapper,
  ContentContainer,
  LeftColumn,
  HeroSection,
  HeroImage,
  HeroText,
  ApproachSection,
  CoachingList,
  CoachingItem,
  SideContentWrapper,
  ContactButton,
  ContactFormWrapper,
} from "./styles";

const MainContent = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <MainContentWrapper component="main">
      <ContentContainer>
        <LeftColumn>
          <HeroSection>
            <HeroImage
              as={motion.div}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={Danielle}
                alt="Danielle Mani practicing yoga"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </HeroImage>
            <HeroText>
              <Typography variant="h2" component="h1" gutterBottom>
                Mon Parcours
              </Typography>
              <Typography variant="body1">
                Passionnée de sports, j'ai pratiqué pendant de nombreuses années
                l'athlétisme (vitesse, relais, etc.) avant de décider de passer
                mon diplôme d'État <strong>BEMF</strong> (Brevet des métiers de
                la forme) et me consacrer à la{" "}
                <strong>préparation physique générale</strong> pour les
                sportifs.
              </Typography>
              <ContactButton variant="contained" href="#contact">
                Contactez-moi
              </ContactButton>
            </HeroText>
          </HeroSection>
          <ApproachSection>
            <Typography variant="h4" component="h2" gutterBottom>
              Mon Approche
            </Typography>
            <Typography variant="body1" paragraph>
              J'axe mon coaching personnalisé autour de trois éléments
              complémentaires:
            </Typography>
            <CoachingList
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {["La pratique physique", "La nutrition", "Le massage"].map(
                (item, index) => (
                  <CoachingItem
                    key={index}
                    variants={itemVariants}
                    whileHover="hover"
                  >
                    <Typography variant="h6" component="h3">
                      {item}
                    </Typography>
                  </CoachingItem>
                )
              )}
            </CoachingList>
          </ApproachSection>
        </LeftColumn>
        <SideContentWrapper>
          <SideContent />
        </SideContentWrapper>
      </ContentContainer>
      <ContactFormWrapper>
        <ContactForm />
      </ContactFormWrapper>
    </MainContentWrapper>
  );
};

export default MainContent;
