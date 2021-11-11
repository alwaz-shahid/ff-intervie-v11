import Head from 'next/head'
import Home from '../components/Home'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home">
        <Home />
      </div>
    </div>
  )
}
