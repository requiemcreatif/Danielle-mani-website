import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";
import Navbar from "../Navbar";
import Danielle from "../../public/images/danielle_yoga.png";
import TrainingCenter from "../../public/images/training_center.svg";
import DarkCenter from "../../public/images/dark_center.png";
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
    <Box /*className=" bg-black"*/>
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
            <Headerbutton>Contactez-moi</Headerbutton>
          </TopLeft>
          <TopRight>
            {/* <ImageContainer>
              <Image
                src={TrainingCenter}
                alt="Descriptive Text"
                objectFit="cover"
                // width={500}
                // height={400}
              />
            </ImageContainer> */}
            <TitleContainer>
              <Typography className="danielle" variant="h1">
                Danielle
              </Typography>
              <Typography className="mani" variant="h1">
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
