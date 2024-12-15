import { Button } from "../../../../shared/ui/button"
import { Input } from "../../../../shared/ui/input"
import { useCreateFeedback } from "../../model/use-create-feedback"
import { useFormFeedback } from "../../view-model/use-form-feedback"
import styles from "./styles.module.css"

export const Root = () => {
  const createFeedback = useCreateFeedback()
  const formFeedback = useFormFeedback(createFeedback.submit)

  return (
    <div className={styles.root}>
      <h2>Контактные данные</h2>
      <form className={styles.form} onSubmit={formFeedback.handleSubmit}>
        <div className={styles.input}>
          <label htmlFor="fullName">ФИО:</label>
          <Input
            type="text" 
            name="fullName" 
            placeholder="Иванов Иван Иванович" 
            value={formFeedback.fields.fullName} 
            onChange={formFeedback.handleChange}
          />
          <span>{formFeedback.errors.fullName}</span>
        </div>
        <div className={styles.input}>
          <label htmlFor="phone">Номер телефона:</label>
          <Input 
            type="tel" 
            name="phone" 
            placeholder="+7 (999) 999-99-99" 
            value={formFeedback.fields.phone}
            onChange={formFeedback.handleChange}
          />
          <span>{formFeedback.errors.phone}</span>
        </div>
        <div className={styles.input}>
          <label htmlFor="email">Почта:</label>
          <Input 
            type="email" 
            name="email" 
            placeholder="ivanov@gmail.com" 
            value={formFeedback.fields.email}
            onChange={formFeedback.handleChange}
          />
          <span>{formFeedback.errors.email}</span>
        </div>
        <Button className={styles.button}>
          Отправить
        </Button>
      </form>
    </div>
  )
}