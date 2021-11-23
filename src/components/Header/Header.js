import React from "react";
import i18n from '../../i18n';
import { withNamespaces } from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import './Header.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Home/Home';
import Aboutme from '../Aboutme/Aboutme';
import Research from '../Research/Research';
import Teaching from '../Teaching/Teaching';
import Cv from '../Cv/Cv';
import Publications from '../Publications/Publications';
import Media from '../Media/Media';
import Contact from '../Contact/Contact';

import TwitterIcon from '../../icons/twitter.svg';
import LinkedInIcon from '../../icons/linkedin.svg';

function Header ({ t }) {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return(
        <div>
            <div className="col-xl-2">
            </div>
            <div className="col-xl-12">
                <Router>
                <div className="logo">
                    <span>LEIRE RINCON</span>
                </div>
                <Navbar bg="light" expand="sm" sticky="top" className="navbar-container">
                    <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <a className="social-page-tw" href="https://twitter.com/leire_rincon" target="_blank" rel="noopener noreferrer"><img src={TwitterIcon} alt="Twitter" className="icon"/></a>
                            <a href="https://www.linkedin.com/in/leire-rincon-ab36679b/?originalSubdomain=es" target="_blank" rel="noopener noreferrer"><img src={LinkedInIcon} alt="LinkedIn" className="icon"/></a>
                        </Nav>
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to="/">{t('home.title')}</Nav.Link>
                            <Nav.Link as={Link} to="/aboutme">{t('aboutme.title')}</Nav.Link>
                            <Nav.Link as={Link} to="/research">{t('research.title')}</Nav.Link>
                            <Nav.Link as={Link} to="/teaching">{t('teaching.title')}</Nav.Link>
                            <Nav.Link as={Link} to="/cv">{t('cv.title')}</Nav.Link>
                            <Nav.Link as={Link} to="/publications">{t('publications.title')}</Nav.Link>
                            <Nav.Link as={Link} to="/media">{t('media.title')}</Nav.Link>
                            <Nav.Link as={Link} to="/contact">{t('contact.title')}</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={() => changeLanguage('ca')}>CA</Nav.Link>
                            <Nav.Link onClick={() => changeLanguage('es')}>ES</Nav.Link>
                            <Nav.Link onClick={() => changeLanguage('en')}>EN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                <br />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/aboutme">
                        <Aboutme />
                    </Route>
                    <Route exact path="/research">
                        <Research />
                    </Route>
                    <Route exact path="/teaching">
                        <Teaching />
                    </Route>
                    <Route exact path="/cv">
                        <Cv />
                    </Route>
                    <Route exact path="/publications">
                        <Publications />
                    </Route>
                    <Route exact path="/media">
                        <Media />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                </Switch>
                </Router>
            </div>
            <div className="col-xl-2">

            </div>
        </div>
    )
}

export default withNamespaces() (Header);