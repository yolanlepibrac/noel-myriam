import Link from "next/link";
import styles from "./button.module.css";

export const Button = (props) => {
  const { children, ...rest } = props;

  if (props.href === undefined) {
    return (
      <button {...rest} className={styles.button} type="button">
        {children}
      </button>
    );
  }

  return (
    <Link href={props.href}>
      <button {...rest} className={styles.button} type="button">
        {children}
      </button>
    </Link>
  );
};
