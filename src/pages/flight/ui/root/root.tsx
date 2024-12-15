import { ReactNode } from "react";
import styles from "./styles.module.css";

export const Root = ({
  infoBlock,
  formBlock,
}: {
  infoBlock: ReactNode,
  formBlock: ReactNode,
}) => {
  return (
    <div className={styles.root}>
      {infoBlock}
      {formBlock}
    </div>
  )
}