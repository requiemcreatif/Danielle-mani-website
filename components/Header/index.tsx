import { Box, Container, Typography } from "@mui/material";
//import Trainer from "../../public/images/trainer.jpg";
import { HeaderWrapper, LeftWrapper, RightWrapper } from "./styles.js";

const Header = () => {
  return (
    <HeaderWrapper>
      <LeftWrapper>
        <h1 className="slide-down ">Danielle Mani</h1>
        <h3 className="fade-in">Coach Sportif Et Bien Être</h3>
        {/* <p className=" animate-pulse">Site officiel en construction!</p> */}
        <button className="animate-bounce">Contactez-moi</button>
      </LeftWrapper>
      <RightWrapper>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </RightWrapper>
    </HeaderWrapper>
  );
};

export default Header;
