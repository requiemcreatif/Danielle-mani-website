"use client";
import { styled, Container } from "@mui/material";

export const MainContentWrapper = styled(Container)`
  margin-top: 60px;
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 10px;

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 10px;
  }
`;
export const MainTextContainer = styled(Container)`
  p {
    font-size: 0.9rem;
    font-weight: 300;
    color: #fff;
    line-height: 1.5;
    padding: 10px 0;

    @media (max-width: 768px) {
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.5;
    }
  }
`;
export const SecondContainer = styled(Container)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  p {
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    p {
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.5;
      padding: 5px;
    }
  }
`;
