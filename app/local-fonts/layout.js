import localFont from 'next/font/local'

const myFont = localFont({
  src: '../static-fonts/Besley-BoldItalic.ttf',
  display: 'swap',
})

export default function LocalFontLayout({children}){
    return (
        <div className={myFont.className}>
            {children}
        </div>
    )
}