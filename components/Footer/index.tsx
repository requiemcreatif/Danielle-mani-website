"use client";

import React from "react";
import Link from "next/link";
import { Typography, Box, Container, Grid, useTheme } from "@mui/material";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FooterWrapper, FooterSection, SocialIcons } from "./styles";

const Footer = () => {
  const theme = useTheme();

  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <FooterSection id="contact">
              <Typography variant="h6" gutterBottom>
                Contact
              </Typography>
              <Typography
                variant="body2"
                component="a"
                href="mailto:daniellemani811@gmail.com"
              >
                daniellemani811@gmail.com
              </Typography>
              <Typography variant="body2">0642879373</Typography>
            </FooterSection>
          </Grid>
          <Grid item xs={12} md={4}>
            <FooterSection>
              <Typography variant="h6" gutterBottom>
                Siret
              </Typography>
              <Typography variant="body2">53168632700028</Typography>
            </FooterSection>
          </Grid>
          <Grid item xs={12} md={4}>
            <FooterSection>
              <Typography variant="h6" gutterBottom>
                Social
              </Typography>
              <SocialIcons>
                <Link
                  href="https://www.instagram.com/dan_man_78?igsh=MTl2ZmVoZ2pyYnJ3bQ=="
                  target="_blank"
                  passHref
                >
                  <Box component="a" color="inherit">
                    <FaInstagram size={24} />
                  </Box>
                </Link>
                <Link
                  href="https://www.facebook.com/daniela.roncin"
                  target="_blank"
                  passHref
                >
                  <Box component="a" color="inherit">
                    <FaFacebookSquare size={24} />
                  </Box>
                </Link>
              </SocialIcons>
            </FooterSection>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} Danielle Mani. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
