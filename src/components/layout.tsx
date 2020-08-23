import React from "react";
import { Topbar } from "./topbar";
import { Navigation } from "./navigation";

type LayoutProps = {
    children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return(
        <React.Fragment>
            <Topbar />
            {children}
        </React.Fragment>
    )
}
