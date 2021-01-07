import React, {Component} from 'react'
import {Navbar, NavbarToggler, NavbarBrand,Nav,NavItem,NavLink, Collapse}from 'reactstrap'
class HeaderComponent extends Component {

constructor(props){
    super(props)
    this.state = {isOpen:false}
    this.toggleNavbar = this.toggleNavbar.bind(this)
}

toggleNavbar() {
    return this.setState({
        isOpen:!this.state.isOpen
    })
}

render(){
    let {isOpen} = this.state
    return(
        <Navbar toggleable inverse className="bg-primary navbar-expand-sm navbar-dark" >
            <NavbarToggler right  onClick={this.toggleNavbar}    />
            <NavbarBrand href="/">Spring + React</NavbarBrand>            
            <Collapse navbar isOpen={isOpen}>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/task">Tasks</NavLink>
                    </NavItem>
                </Nav>

            </Collapse>   
        </Navbar>
    )
}


}
export default HeaderComponent