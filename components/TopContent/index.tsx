import { Container, Box } from "@mui/material";
import Header from "@/components/Header";
import Image from "next/image";
import Trainer from "../../public/images/trainer.jpg";
import { TopContentWrapper, BannerContent, ImageContainer } from "./styles.js";

const TopContent = () => {
  return (
    <TopContentWrapper>
      <BannerContent>
        <Header />
        <ImageContainer>
          {/* <Image src={Trainer} alt="Background image" /> */}
        </ImageContainer>
      </BannerContent>
    </TopContentWrapper>
  );
};

export default TopContent;
