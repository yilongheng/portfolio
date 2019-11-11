import React, { Component } from 'react';
import classes from './Navigation.module.css';

import Logo from '../../components/Logo/Logo';

import menuIcon from '../../assets/images/menu.png';
import closeIcon from '../../assets/images/close.png';

class Navigation extends Component {
    state = {
        navIsOpen: false,
        scrolled: false
    }

    componentDidMount () {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 75;
            this.setState({ scrolled: !isTop })            
        })
    }

    componentWillUnmount () {
        window.removeEventListener('scroll');
    }
    
    onMenuClick = () => {
        this.setState({ navIsOpen: !this.state.navIsOpen })
    }

    render () {
        return (
            <section className = { [classes.Navigation, 
                                    this.state.scrolled ? classes.Scrolled : null,
                                    this.state.navIsOpen ? classes.Module : null]
                                .join(' ') }>

                <div className = { [classes.NavBar, this.state.scrolled ? classes.Scroll : classes.NotScroll].join(' ') }>
                    <Logo />
                    <button onClick = { this.onMenuClick } className = { classes.Hamburger }>
                        <img src = { this.state.navIsOpen ? closeIcon : menuIcon } alt = '' />
                    </button>
                </div>

                <ul className = { classes.Sections }>
                    <li><a href = '#about'>About</a></li>
                    <li><a href = '#skills'>Skills</a></li>
                    <li><a href = '#portfolio'>Portfolio</a></li>
                    <li><a href = '#contact' className = { classes.Contact }>Contact</a></li>
                </ul>

            </section>
        );
    }
}

export default Navigation;
