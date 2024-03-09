import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import Navbar from "../Navbar";
import Danielle from "../../public/images/danielle_yoga.png";
import TrainingCenter from "../../public/images/training_center.svg";
import DarkCenter from "../../public/images/dark_center.png";
import {
  HeaderWrapper,
  TitleContainer,
  DanielleTitle,
  Mani,
  HeaderImage,
  HeaderContent,
  TextAnimation,
  HeaderContainer,
} from "./styles.js";

const Header = () => {
  return (
    <Box /*className=" bg-black"*/>
      <Navbar />
      <Container
        sx={{
          marginTop: "130px",
        }}
      >
        <HeaderContent /*className=" bg-black"*/>
          {/* <HeaderImage
            //style={{ opacity: 0.5 }}
            src={TrainingCenter}
            alt="Descriptive Text"
            layout="fill"
            objectFit="cover"
            //width={400}
            //objectPosition="center center"
            // style={{ opacity: 0.5 }}
          /> */}

          <HeaderContainer>
            <HeaderWrapper>
              <TitleContainer>
                <DanielleTitle /*className="slide-down "*/>
                  Danielle{" "}
                </DanielleTitle>
                <Mani className="slide-down "> Mani</Mani>
              </TitleContainer>

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
      </Container>
    </Box>
  );
};

export default Header;
