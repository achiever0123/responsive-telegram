import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.coverage}>
        <div className={styles.coverageGallery}>
          <img src="dist/image/female.jpeg" alt="female" style={{width: '100%', marginTop:'8px'}}></img>
          <img src="dist/image/female.jpeg" alt="female" className={styles.gallery} style={{width: '100%', marginTop:'8px'}}></img>
          <img src="dist/image/female.jpeg" alt="female" className={styles.gallery} style={{width: '100%', marginTop:'8px'}}></img>
          <img src="dist/image/female.jpeg" alt="female" className={styles.gallery} style={{width: '100%', marginTop:'8px'}}></img>
          <img src="dist/image/female.jpeg" alt="female" className={styles.gallery} style={{width: '100%', marginTop:'8px'}}></img>
        </div>
        <div className={styles.coverageMain}>
          <img src='dist/image/rose.jpeg' alt='main' style={{width: '100%'}}></img>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentName}>Jumpsuit Pattern</div>
        <div className={styles.contentText}>by Texttile Fashion Store</div>
        <button className={styles.contentButton}>Add To Cart</button>
      </div>
    </div>
  )
}
