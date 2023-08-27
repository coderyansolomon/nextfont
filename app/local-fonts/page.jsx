import styles from '@/app/page.module.css'


export default function LocalFonts(){
    return (
        <main className={styles.main}>
        <h1>Local Fonts</h1>
        <p>
          You can also download a font (next.js recommends a variable font), and then
          use localFont from next/font/local, and provide it the path to your downloaded
          file. *Example
        </p>
      </main>
    )
}