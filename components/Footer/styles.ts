import { styled, Box } from "@mui/material";

export const FooterWrapper = styled("footer")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light" ? "#21272a" : theme.palette.background.paper,
  color:
    theme.palette.mode === "light"
      ? theme.palette.common.white
      : theme.palette.text.primary,
  padding: theme.spacing(6, 0),
  marginTop: "auto",
}));

export const FooterSection = styled(Box)(({ theme }) => ({
  "& h6": {
    marginBottom: theme.spacing(2),
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-8px",
      left: 0,
      width: "40px",
      height: "2px",
      backgroundColor: theme.palette.primary.main,
    },
  },
  "& a": {
    color: "inherit",
    textDecoration: "none",
    transition: "color 0.3s ease",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export const SocialIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  "& a": {
    color: "inherit",
    transition: "color 0.3s ease, transform 0.3s ease",
    "&:hover": {
      color: theme.palette.primary.main,
      transform: "translateY(-3px)",
    },
  },
}));
