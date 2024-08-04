"use client";

import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ProfileDanielle from "../../public/images/profile_danielle.svg";
import { SideContentWrapper, SideArticle } from "./styles";

const SideContent = () => {
  const theme = useTheme();

  return (
    <SideContentWrapper>
      <Typography variant="h5" component="h2" gutterBottom>
        Articles récents
      </Typography>
      <SideArticle>
        <Box display="flex" alignItems="center" mb={2}>
          <Image
            src={ProfileDanielle}
            alt="Profile de Danielle"
            width={50}
            height={50}
            style={{ borderRadius: "50%", marginRight: theme.spacing(2) }}
          />
          <Typography variant="h6" component="h3">
            Sport : Comment se faire du bien sans se faire mal ?
          </Typography>
        </Box>
        <Typography variant="body2" paragraph>
          Pas toujours attentifs aux signaux que notre corps nous envoie, nous
          avons tendance à le malmener quand on pratique notre activité
          préférée...
        </Typography>
        <Box mt={2}>
          <Link
            href="https://www.femina.fr/article/sport-comment-se-faire-du-bien-sans-se-faire-mal"
            target="_blank"
            passHref
          >
            <Typography
              component="a"
              variant="button"
              sx={{
                color: theme.palette.primary.main,
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Lire l'article
            </Typography>
          </Link>
        </Box>
      </SideArticle>
    </SideContentWrapper>
  );
};

export default SideContent;
