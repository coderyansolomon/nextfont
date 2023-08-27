import styles from '@/app/page.module.css'


export default function PreloadReuse(){
    return (
        <main className={styles.main}>
        <h1>Preloading & Reuse</h1>
        <p>
         When a font function is called, it is not globally available.
         If it's called in a specific page, it is preloaded on the unique route for that page.
         If it's called in a specific layout, it is preloaded on all the routes wrapped by the layout.
         If it's called in the root layout, it is preloaded on all routes.
        </p>
        <p>
        Every time you call the localFont or googleFont function, a new instance of that
        font is hosted for your app. If you load the same font in multiple files, Next.js
        recommends you call the font function in one shared file, export it as 
        a constant, and then import the font in the files it's used. *Example
        </p>
      </main>
    )
}