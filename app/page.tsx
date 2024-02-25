import { Container, Box } from "@mui/material";
import Header from "@/components/Header";
import MainContent from "@/components/mainContent";
import { TopContentWrapper } from "./glogalstyles/styles";

export default function Home() {
  return (
    <TopContentWrapper>
      <Header />
      <MainContent />
    </TopContentWrapper>
  );
}
