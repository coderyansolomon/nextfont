import Link from "next/link";

const styles = {
    display: 'flex',
    width: '100vw',
    justifyContent: 'space-evenly',
    listStyleType: 'none',
    padding: '40px',
    position: 'absolute',
    top: 0,
    left: 0
}

export default function Header(){
    return <header>
        <nav>
            <ul style={styles}>
                <li>
                    <Link href={'/'}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link href={'/google-fonts'}>
                    Google Fonts
                    </Link>
                </li>
                <li>
                    <Link href={'/local-fonts'}>
                    Local Fonts
                    </Link>
                </li>
                <li>
                    <Link href={'/preloading-reuse'}>
                    Preloading & Reuse
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}