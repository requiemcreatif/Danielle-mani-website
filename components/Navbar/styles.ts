import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

export const NavbarWrapper = styled("nav")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  zIndex: 1100,
  backgroundColor: theme.palette.background.paper,
  transition: theme.transitions.create(["background-color"]),
}));

export const NavbarContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2, 3),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(2, 0),
  },
}));

export const NavbarBrand = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "1.7rem",
  fontWeight: 800,
  letterSpacing: "-0.5px",
}));

export const NavbarMenu = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    gap: theme.spacing(3),
  },
}));

export const NavLink = styled("a")(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: 600,
  transition: theme.transitions.create("color"),
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const MobileMenuButton = styled("button")(({ theme }) => ({
  display: "block",
  background: "none",
  border: "none",
  color: theme.palette.text.primary,
  fontSize: "1.5rem",
  cursor: "pointer",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
