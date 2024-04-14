import { Box, Typography } from "@mui/material";
import Navbar from "../Navbar";

import {
  MainContentWrapper,
  TopContainer,
  TopLeft,
  Headerbutton,
  TopRight,
  TitleContainer,
  ImageContainer,
} from "./styles.js";

const Header = () => {
  return (
    <Box id="home">
      <Navbar />
      <MainContentWrapper>
        <TopContainer>
          <TopLeft>
            <Typography variant="h4">Coach Sportif Et Bien Être</Typography>
            <Typography>
              Selon les besoins et les attentes, j’établis un programme
              personnalisé d’entretien et de remise en forme alliant séances
              sportives et de massage.
            </Typography>
            <Headerbutton href="#contact">Contactez-moi</Headerbutton>
          </TopLeft>
          <TopRight>
            <TitleContainer>
              <Typography className="danielle slide-down " variant="h1">
                Danielle
              </Typography>
              <Typography className="mani fade-in" variant="h1">
                Mani
              </Typography>
            </TitleContainer>
          </TopRight>
        </TopContainer>
      </MainContentWrapper>
    </Box>
  );
};

export default Header;
