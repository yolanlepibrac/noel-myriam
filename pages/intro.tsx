import { useState } from "react";
import { Button } from "../components/Button/Button";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const Intro = () => {
  const message1 = `Je tiens tout d'abords à te dire combien t'es une collègue formidable. C'est hyper agréable de te voir toujours de bonne humeur, toujours positive, bienveillante et motivante.`;
  const message12 = `T'es comme le Z de Zeffy, t'es la first et un pillier pour la team.`;
  const message2 =
    "C'est fucking nice de bosser avec toi. Bravo pour ta reconversion en talent recruiter";
  const message3 =
    "Encore joyeux secret santa. J'espère que ces recommendations te plairont (ou a default, te feront rire)";

  const [step, setStep] = useState(0);
  const router = useRouter();

  const increaseStep = () => {
    if (step === 0) {
      setStep(1);
    }
    if (step === 1) {
      setStep(2);
    }
    if (step === 2) {
      router.push("/gifts");
    }
  };
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url("https://img.freepik.com/vecteurs-libre/fond-rouge-noel-conception-flocons-neige-lumieres-bokeh_1048-14954.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <h2
        style={{
          color: "white",
          fontSize: 40,
          maxWidth: 600,
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        {step === 0 && (
          <div
            style={{
              opacity: 0,
              animation: "fadeInUp 1s ease forwards",
            }}
          >
            <div>{message1}</div>
            <div style={{ marginTop: 50 }}>{message12}</div>
          </div>
        )}
        {step === 1 && (
          <div
            style={{
              opacity: 0,
              animation: "fadeInUp 1s ease forwards",
            }}
          >
            {message2}
          </div>
        )}
        {step === 2 && (
          <div
            style={{
              opacity: 0,
              animation: "fadeInUp 1s ease forwards",
            }}
          >
            {message3}
          </div>
        )}
      </h2>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginBottom: 50,
        }}
      >
        <Button onClick={increaseStep}>Continue</Button>
      </div>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Intro;
