import { Container, Box } from "@mui/material";
import TopContent from "@/components/TopContent";
import MainContent from "@/components/mainContent";
import Footer from "@/components/Footer";
import Image from "next/image";
import Trainer from "../public/images/trainer.jpg";
import { TopContentWrapper } from "./styles/styles";

export default function Home() {
  return (
    <TopContentWrapper>
      <Container>
        <TopContent />
        <MainContent />
      </Container>
    </TopContentWrapper>
  );
}
