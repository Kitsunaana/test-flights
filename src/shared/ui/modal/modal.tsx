import { Icon } from "../icon";
import styles from "./styles.module.css"
import {ReactNode} from "react";

export const Modal = ({
  title,
  body,
  footer,
  onClose,
  isOpen,
}: {
  title: string
  body: ReactNode
  footer?: ReactNode
  onClose: () => void
  isOpen: boolean
}) => {
  if (!isOpen) return null
  return (
    <div className={styles.root}>
      <button className={styles.close} onClick={onClose}>
        <Icon name="close" fontSize={16} />
      </button>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.body}>{body}</div>
        <div className={styles.footer}>{footer}</div>
      </div>
    </div>
  )
}
