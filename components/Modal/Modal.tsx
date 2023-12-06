import { useEffect, useState } from "react";
import styles from "./modale.module.css";

interface Item {
  intro: string;
  title: string;
  description: string;
  source: string;
}

const items: [
  Item,
  Item,
  Item,
  Item,
  Item,
  Item,
  Item,
  Item,
  Item,
  Item,
  Item,
  Item
] = [
  {
    intro: "Quoi lire en 2024",
    title: "Bernard Werbe, L'encyclopédie du savoir relatif et absolu",
    description:
      "Je l'ai (évidemment) pas lu, mais si tu le fait, je le fait aussi",
    source: "/encyclopedie.jpeg",
  },
  {
    intro: "Quoi écouter en 2024",
    title: "Legend - Jul & Rohff",
    description:
      "Un petit coup de coeur pour moi cette année. Si tu veux t'entrainner à rapper, c'est parfait",
    source: "/jul.jpeg",
  },
  {
    intro: "Quel film voir en 2024",
    title: "Le grand bleu, Luc Besson",
    description:
      "Si tu l'as pas vu, je te conseille 'Le grand bleu' ! Un de mes films favoris. Plein de poissons et peu de respiration. Il parait qu'Hubert le regarde toutes les semaines",
    source: "/bleu.jpeg",
  },
  {
    intro: "Ou manger en 2024",
    title: "Bouche Paris",
    description:
      "La prochaine fois ou tu passe à paris, je te conseille d'aller tester ce restau. Hyper bon sans être hors de prix, et c'est proche des bureaux",
    source: "/bouche.png",
  },
  {
    intro: "Qui connaitre en 2024",
    title: "Élisabeth Borne",
    description:
      "Première ministre Française ! On l'apprécie pas beaucoup, mais c'est parce-qu'elle est 8 ascendant 9 sur ennéagramme",
    source: "/bornes.jpeg",
  },
  {
    intro: "Quoi conduire en 2024",
    title: "nouvelle Ferrari F8 Tributo",
    description:
      "Idéale pour se déplacer en ville, et aller au bureau en toute sérénité. Son coffre peut contenir 17 ballons de volley + un filet",
    source: "/ferrari.jpeg",
  },
  {
    intro: "Ou voyager en 2024",
    title: "Les phillipines",
    description:
      "Pour les plages de sable blanc, les eaux turquoises, et les fonds marins plein de tortues. Interdiction à l'avion par contre, tu va encore niquer ton score carbone sinon",
    source: "/phillipines.png",
  },
  {
    intro: "A quoi jouer en 2024",
    title: "Set",
    description:
      "Un jeu cérébral et ludique incroyable, Alexis te le confirmera. J'espère que tu sera meilleur que moi",
    source: "/set2.jpeg",
  },
  {
    intro: "Quelle plante avoir en 2024",
    title: "Un cactus euphorbia",
    description:
      "Comme mon cactus Sergio qui trone au bureau, il est facile à entretenir, et restera avec toi pendant des années",
    source: "/cactus.png",
  },
  {
    intro: "Quel plat cuisiner en 2024",
    title: "Des bananes au caramel",
    description:
      "J'ai découvert ça aux phillipines, c'est fou ! Voici la recette sur marmitton https://www.cuisineactuelle.fr/recettes/bananes-au-caramel-285427",
    source: "/banane.jpeg",
  },
  {
    intro: "Quel compte instagram suivre en 2024",
    title: "Kids Getting Hurt",
    description:
      "Des enfant qui tombent, qui se font mal, et qui pleurent. C'est tellement drôle. Tu peux follow ici https://www.instagram.com/kidsgettinghurt/?hl=fr",
    source: "/kids.png",
  },
  {
    intro: "Quel photo afficher chez toi en 2024",
    title: "Celle là",
    description: "Une de mes préféré du sommet, vous êtes magnifiques",
    source: "/myriam.jpg",
  },
];

const fontSize = (width: number, size: "big" | "small") => {
  if (size === "big") {
    if (width < 400) return 20;
    if (width < 1000) return 30;
    if (width < 2000) return 40;
    return 50;
  } else {
    if (width < 400) return 15;
    if (width < 1000) return 20;
    if (width < 2000) return 35;
    return 30;
  }
};

export const Modal = ({
  openedGift,
  onClose,
}: {
  openedGift: number;
  onClose: () => void;
}) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (window !== undefined) {
      setWidth(window.screen.width);
    }
  }, []);

  console.log(width);
  const titre = items[openedGift - 1].title;
  const description = items[openedGift - 1].description;
  const source = items[openedGift - 1].source;
  const intro = items[openedGift - 1].intro;

  return (
    <div
      style={{
        position: "fixed",
        minWidth: "100vw",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        animation: `fadeIn 300ms`,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div></div>
          <h1 style={{ color: "white", fontSize: fontSize(width, "big") }}>
            {intro}
          </h1>

          <div
            onClick={onClose}
            style={{
              fontSize: fontSize(width, "big"),
              color: "white",
              height: 50,
              width: 50,
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            X
          </div>
        </div>

        <h1 style={{ color: "white", fontSize: fontSize(width, "big") }}>
          {titre}
        </h1>

        <div>
          <img
            style={{
              animation: `spin 1.5s ease-out`,
              height: width > 1000 ? 400 : 200,
              marginTop: width > 1000 ? 150 : 50,
              marginBottom: width > 1000 ? 150 : 50,
            }}
            src={source}
            alt="img"
          />
        </div>

        <div
          style={{
            color: "white",
            textAlign: "center",
            fontSize: fontSize(width, "small"),
          }}
        >
          {description}
        </div>
      </div>
      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(720deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
};
