import { styled, Box, Container, Button } from "@mui/material";
import { color, motion } from "framer-motion";

export const MainContentWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "auto",
}));

export const ContentContainer = styled(Container)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) 300px",
  gap: theme.spacing(4),
  maxWidth: "1400px",
  padding: theme.spacing(4),
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const LeftColumn = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
}));

export const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "stretch",
  backgroundColor: "#000",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const HeroImage = styled(motion.div)(({ theme }) => ({
  flex: "0 0 50%",
  position: "relative",
  minHeight: "400px",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    minHeight: "300px",
  },
}));

export const HeroText = styled(Box)(({ theme }) => ({
  flex: "0 0 50%",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export const ContactButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  alignSelf: "flex-start",
  backgroundColor: "#fff",
  color: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.grey[200],
  },
}));

export const ApproachSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
}));

export const CoachingList = styled(motion.ul)(({ theme }) => ({
  listStyle: "none",
  padding: 0,
  margin: theme.spacing(2, 0),
}));

export const CoachingItem = styled(motion.li)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  cursor: "pointer",
}));

export const SideContentWrapper = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: theme.spacing(2),
  alignSelf: "start",
  [theme.breakpoints.down("lg")]: {
    position: "static",
  },
}));

export const ContactFormWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0),
  marginTop: theme.spacing(8),
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
}));
