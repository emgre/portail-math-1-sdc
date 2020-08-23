import React from "react";
import Nav from "react-bootstrap/Nav";

export type NavigationProps = {
}

export const Navigation: React.FC<NavigationProps> = ({}) => {
    return(
        <Nav className="flex-column">
            <Nav.Link>Mathématique secondaire 1</Nav.Link>
        </Nav>
    )
}
