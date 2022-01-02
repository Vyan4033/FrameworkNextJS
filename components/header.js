import Link from 'next/link'
export default function Header(){
    return(
        <div className="bg-warning text-dark bg-opacity-50">
            <header className="d-flex justify-content-center py-3">
                <ul className="nav col-12 col-md-auto mb-md-0">
                    <Link href="/">
                        <li><a className="nav-link px-5 link-dark">Home</a></li>
                    </Link>
                    <Link href="/">
                        <li><a className="nav-link px-5 link-dark">Hotel</a></li>
                    </Link>
                    <Link href="/about">
                        <li><a className="nav-link px-5 link-dark">About</a></li>
                    </Link>
                </ul>
            </header>
        </div>
    )
}