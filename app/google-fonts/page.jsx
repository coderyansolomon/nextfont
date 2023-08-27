import styles from '@/app/page.module.css'


export default function GoogleFonts(){
    return (
        <main className={styles.main}>
        <h1>Google Fonts</h1>
        <p>
          next/font/google will automatically self host any google font.
          It will be included in the deployed code and no requests are sent
          to Google by the browser. *Example
        </p>
        <p>
          Next.js recommends using a variable font from Google fonts. You can see
          available variable fonts at fonts.google.com/variablefonts
        </p>
        <p>
          If you use a non-variable font, you need to specify a font weight. *Roboto example.
          You can also specificy multiple font weights or styles by passing in an array.
          e.g. weight: [400, 700]
        </p>
        <p>
          Google fonts are automatically subset: fonts.google.com/knowledge/glossary/subsetting
          This reduces file size and improves performance. However, you need to specify the
          subsets you want to preload. e.g. subset: ['latin']
        </p>
        <p>
          You can also import and use multiple fonts. There are a couple of different 
          approaches you can do for this. The first approach is creating a function that
          exports a font, imports it, and applies its className when needed. *Example
        </p>
        <p>
          Alternatively, you can create a CSS variable and use your fonts using CSS. You
          can set a variable: '--some-name' on your imported font, and then use that from
          within a css file using var(--some-name) *Example
        </p>
      </main>
    )
}