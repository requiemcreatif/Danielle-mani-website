"use client";

import { styled, Box } from "@mui/material";

export const SideContentWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

export const SideArticle = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  transition: "background-color 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));
