import { styled, Container, Box } from "@mui/material";

export const MainContentWrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(8, 2),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: theme.spacing(4, 2),
  },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  flex: "0 0 45%",
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(4),
  },
}));

export const MainTextContainer = styled(Box)(({ theme }) => ({
  flex: "0 0 50%",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

export const SecondContainer = styled(Container)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: theme.spacing(4),
  padding: theme.spacing(8, 2),
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const CoachingList = styled("ul")(({ theme }) => ({
  listStyle: "none",
  padding: 0,
  margin: theme.spacing(2, 0),
}));

export const CoachingItem = styled("li")(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));
