import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import Snowfall from "react-snowfall";
import { Gift } from "../components/Gift/Gift";

const Gifts = () => {
  const [color, setColor] = useState("#dee4fd");
  const [snowflakeCount, setSnowflakeCount] = useState(200);
  const [radius, setRadius] = useState<[number, number]>([0.5, 3.0]);
  const [speed, setSpeed] = useState<[number, number]>([0.5, 3.0]);
  const [wind, setWind] = useState<[number, number]>([-0.5, 2.0]);

  const [openedGifts, setOpenedGifts] = useState<number[]>([]);
  const openGift = (value: number) => () => {
    setOpenedGifts([...openedGifts, value]);
  };

  return (
    <div>
      <main
        style={{
          backgroundColor: "black",
          width: "100vw",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <Snowfall
          color={color}
          snowflakeCount={snowflakeCount}
          radius={radius}
          speed={speed}
          wind={wind}
        />
        <div style={{ width: "100%", textAlign: "center", paddingTop: 30 }}>
          <h2 style={{ color: "white" }}>
            Click on the gifts to see what is inside
          </h2>
        </div>
        <Gift openGift={openGift} openedGifts={openedGifts} value={1} />
        <Gift openGift={openGift} openedGifts={openedGifts} value={2} />
        <Gift openGift={openGift} openedGifts={openedGifts} value={3} />
        <Gift openGift={openGift} openedGifts={openedGifts} value={4} />
        <Gift openGift={openGift} openedGifts={openedGifts} value={5} />
        <Gift openGift={openGift} openedGifts={openedGifts} value={6} />
        <Gift openGift={openGift} openedGifts={openedGifts} value={7} />
        <Gift openGift={openGift} openedGifts={openedGifts} value={8} />
        <Gift openGift={openGift} openedGifts={openedGifts} value={9} />
        <Gift openGift={openGift} openedGifts={openedGifts} value={10} />
        <Gift openGift={openGift} openedGifts={openedGifts} value={11} />
        <Gift openGift={openGift} openedGifts={openedGifts} value={12} />
      </main>

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
      `}</style>
    </div>
  );
};

export default Gifts;
