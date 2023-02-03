import Form from '../components/Form/form.component'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.window}>
        <div>
          <Form />
        </div>
      </div>
    </main>
  )
}
