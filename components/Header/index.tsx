import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import Navbar from "../Navbar";
//import Trainer from "../../public/images/trainer.jpg";
import TrainingCenter from "../../public/images/training_center.svg";
import {
  HeaderWrapper,
  MainTitle,
  HeaderImage,
  HeaderContent,
  TextAnimation,
  HeaderContainer,
} from "./styles.js";

const Header = () => {
  return (
    <Box>
      <HeaderContent className=" bg-black">
        {/* <HeaderImage
          src={TrainingCenter}
          alt="Descriptive Text"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          // style={{ opacity: 0.5 }}
        /> */}
        <Navbar />
        <HeaderContainer>
          <HeaderWrapper>
            <MainTitle className="slide-down ">Danielle Mani</MainTitle>
            <h3>Coach Sportif Et Bien Être</h3>
            {/* <TextAnimation className=" animate-pulse">
            Site officiel en construction!
          </TextAnimation> */}

            <Typography className="text-white">
              Selon les besoins et les attentes, j’établis un programme
              personnalisé d’entretien et de remise en forme alliant séances
              sportives et de massage.
            </Typography>
            <button>Contactez-moi</button>
          </HeaderWrapper>
        </HeaderContainer>
      </HeaderContent>
    </Box>
  );
};

export default Header;
