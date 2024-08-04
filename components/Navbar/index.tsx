"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Switch,
  useMediaQuery,
  useTheme as useMuiTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@/components/providers/ThemeProvider";
import Link from "next/link";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
}));

const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

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

  const drawer = (
    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            href={item.href}
            onClick={toggleDrawer(false)}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DM
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
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
              <Button
                key={item.text}
                color="inherit"
                component={NavLink}
                href={item.href}
              >
                {item.text}
              </Button>
            ))}
          </>
        )}
        <Switch
          checked={mode === "dark"}
          onChange={toggleMode}
          color="default"
          inputProps={{ "aria-label": "toggle dark mode" }}
        />
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
