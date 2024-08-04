"use client";

import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { useTheme as useCustomTheme } from "@/components/providers/ThemeProvider";
import {
  HeaderWrapper,
  HeaderContent,
  HeaderLeft,
  HeaderRight,
  HeaderButton,
  TitleContainer,
} from "./styles";

const Header = () => {
  const theme = useTheme();
  const { mode } = useCustomTheme();

  return (
    <HeaderWrapper id="home">
      <HeaderContent>
        <HeaderLeft>
          <Typography variant="h2" component="h1" gutterBottom>
            Coach Sportif Et Bien Être
          </Typography>
          <Typography variant="body1" paragraph>
            Selon les besoins et les attentes, j'établis un programme
            personnalisé d'entretien et de remise en forme alliant séances
            sportives et de massage.
          </Typography>
          <HeaderButton href="#contact" variant="contained" color="primary">
            Contactez-moi
          </HeaderButton>
        </HeaderLeft>
        <HeaderRight>
          <TitleContainer isLightMode={mode === "light"}>
            <Typography className="danielle slide-down" variant="h1">
              Danielle
            </Typography>
            <Typography className="mani fade-in" variant="h1">
              Mani
            </Typography>
          </TitleContainer>
        </HeaderRight>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
