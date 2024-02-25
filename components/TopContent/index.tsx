import { Container, Box } from "@mui/material";
import Header from "@/components/Header";
import Image from "next/image";
import { TopWrapper, BannerContent } from "./styles.js";

const TopContent = () => {
  return (
    <TopWrapper>
      <Container>
        <Header />
      </Container>
    </TopWrapper>
  );
};

export default TopContent;
