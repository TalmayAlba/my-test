import React from "react";
import i18n from '../../i18n';
import { withNamespaces } from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './Header.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Home/Home';
import Aboutme from '../Aboutme/Aboutme';
import Preferences from '../Preferences/Preferences';
import Interest from '../Interest/Interest';
import Information from '../Information/Information';
import Gender from '../Gender/Gender';
import Teaching from '../Teaching/Teaching';
import Cv from '../Cv/Cv';
import Journal from '../Journal/Journal';
import Book from '../Book/Book';
import Working from '../Working/Working';
import Media from '../Media/Media';
import Contact from '../Contact/Contact';

function Header ({ t }) {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return(
        <div>
            <div className="col-xl-2">
            </div>
            <div className="col-xl-12 col-sm-8">
                <Router>
                <div className="logo">
                    <span>LOGO</span>
                    <h1>{t('welcome')}</h1>
                </div>
                <Navbar bg="light" expand="sm" sticky="top" className="navbar-container">
                    <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to="/">{t('home.title')}</Nav.Link>
                            <Nav.Link as={Link} to="/aboutme">{t('aboutme.title')}</Nav.Link>
                            <NavDropdown title={t('research.title')} id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/preferences">{t('preferences.title')}</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/interest">{t('interest.title')}</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/information">{t('information.title')}</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/gender">{t('gender.title')}</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/teaching">{t('teaching.title')}</Nav.Link>
                            <Nav.Link as={Link} to="/cv">{t('cv.title')}</Nav.Link>
                            <NavDropdown title={t('publications.title')} id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/journal">{t('journal.title')}</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/book">{t('book.title')}</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/working">{t('working.title')}</NavDropdown.Item>
                            </NavDropdown>
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
                    <Route exact path="/preferences">
                        <Preferences />
                    </Route>
                    <Route exact path="/interest">
                        <Interest />
                    </Route>
                    <Route exact path="/information">
                        <Information />
                    </Route>
                    <Route exact path="/gender">
                        <Gender />
                    </Route>
                    <Route exact path="/teaching">
                        <Teaching />
                    </Route>
                    <Route exact path="/cv">
                        <Cv />
                    </Route>
                    <Route exact path="/journal">
                        <Journal />
                    </Route>
                    <Route exact path="/book">
                        <Book />
                    </Route>
                    <Route exact path="/working">
                        <Working />
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