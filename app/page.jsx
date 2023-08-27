import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Using Fonts In Next.js 13</h1>
      <p>next/font automatically optimizes your fonts. It 
        removes external network requests and improves privacy.
      </p>
       <p>
        It does this by automatically self-hosting any font file. This prevents
        layout shift and improves the loading of your fonts.
      </p>
      <p>
        Additonally, it allows you to use Google Fonts quite easily. CSS and font files
        are downloaded at build time and self-hosted with the rest of your static assets.
        This means no requests are sent to Google by the browser improving performance.
      </p>
    </main>
  )
}