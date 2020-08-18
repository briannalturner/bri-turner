import React from 'react'
import {NavLink} from 'react-router-dom'
import { gsap } from 'gsap'
import logo from '../pictures/bt2.png'

export default class Navbar extends React.Component {

    componentDidMount() {
        gsap.to('.logo', {rotation: '360', repeat: -1, ease: 'none', duration: 5})
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <img src={logo} className="mx-2 logo" alt='logo' style={{width: '30px', boxShadow:'black'}} />
                <NavLink to="/" className="navbar-brand">Bri Turner</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/portfolio" className="nav-link" activeClassName="active" >Portfolio</NavLink>
                        <NavLink to="/about" className="nav-link" activeClassName="active" >About Me</NavLink>
                    </div>
                </div>
            </nav>
        )
    }
}