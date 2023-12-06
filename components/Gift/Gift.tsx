import styles from "./gift.module.css";
import classnames from "classnames";

export const Gift = ({
  openedGifts,
  value,
  openGift,
}: {
  openedGifts: number[];
  value: number;
  openGift: (value: number) => () => void;
}) => {
  const isOpened = openedGifts.includes(value);

  const containerStyles: Record<string, string | number> = {
    width: 150,
    height: 150,
    display: "inline-flex",
    margin: 70,
    marginTop: 30,
    position: "relative",
  };

  if (isOpened) {
    return <div style={containerStyles}></div>;
  }
  return (
    <div style={containerStyles} onClick={openGift(value)}>
      <div style={{ position: "absolute", top: 0, left: 0 }}>
        <div
          className={classnames(
            styles["col-12"],
            styles["mt-5"],
            styles["d-flex"],
            styles["justify-content-center"]
          )}
        >
          <div className={styles.box}>
            <div className={styles["box-body"]}>
              <div className={styles["box-lid"]}>
                <div className={styles["box-bowtie"]}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
