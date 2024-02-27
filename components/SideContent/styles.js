"use client";
import { styled } from "@mui/material";

export const SideContentWrapper = styled("div")`
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  height: 100%;

  a {
    padding: 0.3rem 1rem;
    border-radius: 25px;
    color: #7d0323;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    border: #7d0323 1px solid;
    cursor: pointer;
  }
`;

export const SideArticle = styled("div")`
  padding: 5px;
  &:hover {
    background-color: #f0f0f0;
    border-radius: 10px;
  }
  margin: 1rem 0;
  .titleArticle {
    color: #7d0323;
    font-size: 1rem;
    font-weight: 700;
    text-align: justify;
  }

  .snippetArticle {
    font-size: 0.9rem;
    font-weight: 300;
    text-align: justify;
  }

  .linkContainer {
    padding: 0.9rem 0;
  }
`;
