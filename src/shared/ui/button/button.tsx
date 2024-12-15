import clsx from 'clsx'
import styles from './styles.module.css'

export const Button = ({ 
  children, 
  onClick,
  className,
}: {
  className?: string,
  children: React.ReactNode, 
  onClick?: () => void 
}) => {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  )
}