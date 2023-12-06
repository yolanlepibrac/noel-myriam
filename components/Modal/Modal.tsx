import { useEffect, useState } from "react";
import styles from "./modale.module.css";

export const Modal = ({
  openedGift,
  onClose,
}: {
  openedGift: number;
  onClose: () => void;
}) => {
  const [duration, setDuration] = useState(2);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setDuration((prevDuration) => {
        const newDuration = prevDuration + 0.1; // Adjust increment for smoother transition
        return newDuration <= 10 ? newDuration : 10; // Adjust for desired max duration
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const titre = (() => {
    if (openedGift === 1) {
      return "JUL - JE SUIS PAS FOU";
    }
    return "todo";
  })();

  const description = (() => {
    if (openedGift === 1) {
      return "Pourra écouter cette incroyable musique en boucle";
    }
    return "todo";
  })();

  const source = (() => {
    if (openedGift === 1) {
      return "https://www.iloveimg.com/img/iloveimg/social/fr/cropimage.jpg";
    }
    return "todo";
  })();

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
          <h1 style={{ color: "white" }}>{titre}</h1>
          <div
            onClick={onClose}
            style={{
              fontSize: 50,
              color: "white",
              height: 50,
              width: 50,
              cursor: "pointer",
            }}
          >
            X
          </div>
        </div>

        <div>
          <img
            style={{
              animation: `spin 1.5s ease-out`,
              height: 400,
              marginTop: 150,
              marginBottom: 150,
            }}
            src={source}
            alt="img"
          />
        </div>

        <div style={{ color: "white", textAlign: "center" }}>{description}</div>
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
