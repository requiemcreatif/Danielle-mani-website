import { Container, Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import MainContent from "@/components/mainContent";
import { TopContentWrapper } from "./glogalstyles/styles";

export default function Home() {
  return (
    <TopContentWrapper>
      <Navbar />
      <Box sx={{ paddingTop: "64px" }}>
        {" "}
        {/* Add padding to account for fixed navbar */}
        <Header />
        <MainContent />
      </Box>
    </TopContentWrapper>
  );
}
