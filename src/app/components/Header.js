import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/" >
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" >
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/movie" >
                        Movie
                    </Link>
                </li>
                <li>
                    <Link href="/contact" >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header