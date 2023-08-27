import { Public_Sans } from 'next/font/google'
// Roboto is a non-variable font
// import { Roboto } from 'next/font/google'
 
// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap',
// })
 
 
// If loading a variable font, you don't need to specify the font weight
const publicSans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function GoogleFontLayout({children}){
    return (
        <div className={publicSans.className}>
            {children}
        </div>
    )
}