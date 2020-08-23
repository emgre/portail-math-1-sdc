import React from "react";
import { Link } from 'gatsby';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// @ts-ignore
import css from './topbar.module.css';

export type TopbarProps = {
}

export const Topbar: React.FC<TopbarProps> = ({}) => {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand><Link to="/" className={css.navlink}>Mathématiques secondaire 1</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="topbar-nav" />
            <Navbar.Collapse id="topbar-nav">
                <Nav className="mr-auto">
                <Nav.Link><Link to="/chap_01" className={css.navlink}>Chapitre 1</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
