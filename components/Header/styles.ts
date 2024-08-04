import { styled, Container, Button } from "@mui/material";
import Link from "next/link";
import TrainingCenter from "../../public/images/training_center.svg";

export const HeaderWrapper = styled("header")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(6, 0),
  },
}));

export const HeaderContent = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    textAlign: "center",
  },
}));

export const HeaderLeft = styled("div")(({ theme }) => ({
  flex: 1,
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    paddingRight: 0,
    marginTop: theme.spacing(4),
  },
}));

export const HeaderRight = styled("div")(({ theme }) => ({
  flex: 1,
  position: "relative",
  height: "400px",
  backgroundImage: `url(${TrainingCenter.src})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginBottom: theme.spacing(4),
  },
}));

export const HeaderButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

interface TitleContainerProps {
  isLightMode: boolean;
}

export const TitleContainer = styled("div")<TitleContainerProps>(
  ({ theme, isLightMode }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    "& .danielle": {
      color: isLightMode
        ? theme.palette.primary.main
        : theme.palette.primary.light,
      fontSize: "4rem",
      fontWeight: 900,
      lineHeight: 0.8,
      textTransform: "uppercase",
      [theme.breakpoints.down("sm")]: {
        fontSize: "3rem",
      },
    },
    "& .mani": {
      color: isLightMode
        ? theme.palette.primary.main
        : theme.palette.primary.light,
      fontSize: "8rem",
      fontWeight: 900,
      lineHeight: 0.8,
      textTransform: "uppercase",
      [theme.breakpoints.down("sm")]: {
        fontSize: "6rem",
      },
    },
  })
);
