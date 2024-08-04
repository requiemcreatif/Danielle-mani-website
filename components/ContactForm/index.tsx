"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import { StyledButton } from "../mainContent/styles";
const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(3),
    maxWidth: 400,
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
}));

const SuccessIcon = styled(CheckCircleOutlineIcon)(({ theme }) => ({
  fontSize: 80,
  color: theme.palette.success.main,
  marginBottom: theme.spacing(2),
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(1),
  top: theme.spacing(1),
}));

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsModalOpen(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Échec de l'envoi du message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle error (you could show an error modal here)
    }
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{ bgcolor: "background.paper", py: 2 }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h5" align="center" gutterBottom>
          Contactez-moi
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Nom"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Sujet"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <StyledButton type="submit" variant="contained" size="large">
                Envoyer
              </StyledButton>
            </Grid>
          </Grid>
        </StyledForm>
      </Container>

      <StyledDialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogContent>
          <CloseButton onClick={() => setIsModalOpen(false)}>
            <CloseIcon />
          </CloseButton>
          <ModalContent>
            <SuccessIcon />
            <Typography variant="h5" gutterBottom>
              Message Envoyé
            </Typography>
            <Typography variant="body1">
              Votre message a été envoyé avec succès. Je vous répondrai dans les
              plus brefs délais.
            </Typography>
          </ModalContent>
        </DialogContent>
      </StyledDialog>
    </Box>
  );
};

export default ContactForm;
