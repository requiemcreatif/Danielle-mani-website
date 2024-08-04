"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Switch,
  useMediaQuery,
  useTheme as useMuiTheme,
  Container,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@/components/providers/ThemeProvider";
import Link from "next/link";
import { styled } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "1.1rem",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const MotionDrawer = motion(Drawer);

const Navbar = () => {
  const { mode, toggleMode } = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const navItems = [
    { text: "Accueil", href: "#home" },
    { text: "Services", href: "#services" },
    { text: "Contact", href: "#contact" },
  ];

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const drawerVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  const drawer = (
    <AnimatePresence>
      {drawerOpen && (
        <MotionDrawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          variant="temporary"
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: "100%",
              backgroundColor: muiTheme.palette.background.paper,
            },
          }}
          initial="closed"
          animate="open"
          exit="closed"
          variants={drawerVariants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                href={item.href}
                onClick={toggleDrawer(false)}
                sx={{ textAlign: "center", py: 2 }}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    variant: "h4",
                    sx: { fontWeight: 600 },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </MotionDrawer>
      )}
    </AnimatePresence>
  );

  return (
    <StyledAppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            DM
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              {drawer}
            </>
          ) : (
            <>
              {navItems.map((item) => (
                <NavLink
                  key={item.text}
                  href={item.href}
                  style={{ marginLeft: 20 }}
                >
                  {item.text}
                </NavLink>
              ))}
            </>
          )}
          <Switch
            checked={mode === "dark"}
            onChange={toggleMode}
            color="default"
            inputProps={{ "aria-label": "toggle dark mode" }}
            sx={{ ml: 2 }}
          />
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;
