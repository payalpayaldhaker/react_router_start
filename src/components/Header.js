import React from 'react'

export default function Header() {
    return (
        <>
            <header>
            <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active btn btn-success btn-md me-5" aria-current="page" href="/">Conatct page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active btn btn-success btn-md me-5" href="/">About page </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active btn btn-success btn-md me-5" href="/">Home page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link  active btn btn-success btn-md me-5" href="/">Link page</a>
                    </li>
            </ul>
            </header>
        </>
    )
}
