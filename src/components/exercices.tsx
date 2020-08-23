import React from "react";
import Row from 'react-bootstrap/Row';
import { PdfLink } from '../components/pdflink';

export type ExercicesProps = {
    name: string;
    src: string;
    srcSolution?: string;
}

export const Exercices: React.FC<ExercicesProps> = ({name, src, srcSolution}) => {
    return(
        <Row className="mb-3">
            <PdfLink name={name} src={src} />
            {srcSolution &&
                <PdfLink name="Solutions" src={srcSolution} isSolution />
            }
        </Row>
    )
}
