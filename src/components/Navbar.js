import React from 'react'
import {NavLink} from 'react-router-dom'
// import { gsap } from 'gsap'
import logo from '../pictures/BT2.png'
import name from '../pictures/name.png'

export default class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* <img src={logo} className="mx-2 logo" alt='logo' style={{width: '40px', boxShadow:'black'}} /> */}
                <img src={name} alt='name' style={{maxWidth: '125px', boxShadow:'black'}} />
                <span className='ml-auto'>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to='/' className="nav-link" activeClassName="active" >Home</NavLink>
                            <NavLink to="/portfolio" className="nav-link" activeClassName="active" >Portfolio</NavLink>
                            <NavLink to="/about" className="nav-link" activeClassName="active" >About Me</NavLink>
                        </div>
                    </div>
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        )
    }
}