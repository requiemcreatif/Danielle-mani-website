import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ProfileDanielle from "../../public/images/profile_danielle.svg";
import { SideContentWrapper, SideArticle } from "./styles";

const SideContent = () => {
  return (
    <SideContentWrapper>
      <Typography variant="h6">Articles récents</Typography>
      <SideArticle>
        <Image
          src={ProfileDanielle}
          alt="Descriptive Text"
          width={50}
          height={50}
          style={{ borderRadius: "25px" }}
        />
        <Typography className="titleArticle">
          Sport : Comment se faire du bien sans se faire mal ?
        </Typography>
        <Typography className="snippetArticle">
          Pas toujours attentifs aux signaux que notre corps nous envoie, nous
          avons tendance à le malmener quand on pratique notre activité
          préférée...
        </Typography>
        <div className="linkContainer">
          <Link
            href="https://www.femina.fr/article/sport-comment-se-faire-du-bien-sans-se-faire-mal"
            target="_blank"
          >
            Lire...
          </Link>
        </div>
      </SideArticle>
    </SideContentWrapper>
  );
};

export default SideContent;
