import React from "react";
import Button from "react-bootstrap/Button";
import { FaFilePdf } from 'react-icons/fa';

export type PdfLinkProps = {
    name: string;
    src: string;
    isSolution?: boolean;
}

export const PdfLink: React.FC<PdfLinkProps> = ({name, src, isSolution}) => {
    const variant = isSolution ? "success" : "primary";
    return(
        <Button variant={variant} href={src} className="mr-2">
            <FaFilePdf /> {name}
        </Button>
    )
}
