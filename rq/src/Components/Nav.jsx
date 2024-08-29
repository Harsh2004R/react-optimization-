import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="/RQHeros">RQ Heros</a>
                        </li>
                        <li>
                            <a href="/Heros"> Heros</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
        
    )
}

export default Nav
