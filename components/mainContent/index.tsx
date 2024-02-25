import React from "react";
import { Container } from "@mui/material";
import { MainDescription } from "./styles";

const MainContent = () => {
  return (
    <Container>
      <main>
        <MainDescription>
          Pendant des années j’ai fais de l’athlétisme(vitesse/relais…)avant de
          passer mon diplôme d’état BEMF (Brevet des métiers de la forme).
          Ensuite, je me suis orientée vers la préparation physique générale
          pour les sportifs avant de me consacrer au coaching personnalisé,
          uniquement à domicile. Pour moi la remise en forme, le sport et le
          bien être incluent également le massage.
          <br />
          <br /> Je me suis donc formée à différentes techniques :<br /> -le
          massage sportif pour aider à la récupération musculaire et
          l’élimination de l’acide lactique,
          <br />- ledrainage lymphatique qui est une technique de massage qui
          active la circulation de la lymphe dans le corps, réduit la rétention
          d’eau, améliore l’aspect de la peau et affine la silhouette. <br />
          Selon les besoins et les attentes, j’établis un programme personnalisé
          d’entretien et de remise en forme alliant séances sportives et de
          massage. Pour plus de renseignements, vous pouvez me contacter au
          numéro de téléphone et adresse du site
        </MainDescription>
      </main>
    </Container>
  );
};

export default MainContent;
