"use client";
import { Box } from "@mui/material";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { MenuWrapper } from "./styles";

export function MobileMenuView({ onClose }) {
  return (
    <MenuWrapper className="active">
      <Box>
        <Link href="#">Home</Link>

        <Link href="#">Services</Link>

        <Link href="#">Contact</Link>
      </Box>
      <CgClose className="mobile" onClick={onClose} />
    </MenuWrapper>
  );
}
