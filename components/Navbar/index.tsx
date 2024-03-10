"use client";

import { useState, useEffect, useRef, forwardRef } from "react";
import { TfiMenu } from "react-icons/tfi";
import { MobileMenuView } from "../MobileMenuView";
import { Box, Container, Button } from "@mui/material";
//import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import {
  NavbarWrapper,
  NavbarContainer,
  MobileMenu,
  NavbarMenu,
  MobileMenuWrapper,
  MobileMenuItems,
} from "./styles";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    event.preventDefault();
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    event.preventDefault();
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <NavbarWrapper>
        <NavbarContainer>
          <h4>DM</h4>
          <MobileMenuWrapper>
            <MobileMenu>
              <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <TfiMenu className="menu-icon" />
              </Button>
            </MobileMenu>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <MobileMenuItems>
                    <ClickAwayListener
                      onClickAway={(event: MouseEvent | TouchEvent) =>
                        handleClose(event)
                      }
                    >
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <Link
                          href="#home"
                          onClick={(
                            event: React.MouseEvent<HTMLAnchorElement>
                          ) => handleClose(event)}
                        >
                          Accueil
                        </Link>
                        <Link
                          href="#services"
                          onClick={(
                            event: React.MouseEvent<HTMLAnchorElement>
                          ) => handleClose(event)}
                        >
                          Services
                        </Link>
                        <Link
                          href="#contact"
                          onClick={(
                            event: React.MouseEvent<HTMLAnchorElement>
                          ) => handleClose(event)}
                        >
                          Contact
                        </Link>
                      </MenuList>
                    </ClickAwayListener>
                  </MobileMenuItems>
                </Grow>
              )}
            </Popper>
          </MobileMenuWrapper>
          <NavbarMenu>
            <Link href="#" className="font-light">
              Accueil
            </Link>
            <Link href="#" className="font-light">
              Services
            </Link>
            <Link href="#contact" className="font-light">
              Contact
            </Link>
          </NavbarMenu>
        </NavbarContainer>
      </NavbarWrapper>

      {/* {isMobileMenuOpen && <MobileMenuView onClose={toggleMobileMenu} />} */}
    </>
  );
};

export default Navbar;
