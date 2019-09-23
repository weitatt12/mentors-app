import React from 'react';
import {
    NavItem,
    NavLink
} from 'reactstrap';


class Navbar extends React.Component {
    render() {
        return(
            <>
                <NavItem>
                    <NavLink href="/mentor"><img src="https://icons-for-free.com/iconfiles/png/512/arrow+back+back+left+previous+stroke+arrow+icon-1320185739200187742.png" alt="back arrow" width="30px" height="30px" /></NavLink>
                </NavItem>
            </>
        );
    }
}

export default Navbar;