import React from 'react'
import { Link } from 'react-router-dom'
import {
    NavBar,
    HeaderContainer,
    HeaderTitle

} from './Header.style'

const Header  = () =>
    (
        <>
            <nav>
                <NavBar>
                    <Link to='/show-users'>
                        Home
                    </Link>
                    <Link to="/">
                        Add User
                    </Link>
                </NavBar>
            </nav>
            <HeaderContainer>
                <HeaderTitle>
                    Welcome
                </HeaderTitle>
            </HeaderContainer>
        </>
        )

export default Header
