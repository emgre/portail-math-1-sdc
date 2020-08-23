import React from 'react';
import { Helmet } from 'react-helmet';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import type { PageProps } from 'gatsby';
import { Layout } from '../components/layout';
import { Exercices } from '../components/exercices';
import { PdfLink } from '../components/pdflink';
import * as ch1 from '../documents/chapitre_1';

export default function Chap01(props: PageProps) {
    const title = 'Chapitre 1 - Les entiers';

    return (
        <React.Fragment>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Layout>
                <Container className="mt-5">
                    <h1>{title}</h1>
                    <hr />
                    <PdfLink name="Notes de cours" src={ch1.notes_de_cours} />
                    <Row className="mt-4">
                        <Col>
                            <h2>Exercices</h2>
                            <Exercices name="Démarche structurée" src={ch1.demarcheStructuree} srcSolution={ch1.demarcheStructureeSol} />
                            <Exercices name="Opérations sur la droite numérique" src={ch1.droiteNumerique} srcSolution={ch1.droiteNumeriqueSol} />
                            <Exercices name="Chaînes de calcul" src={ch1.chaineCalculs} srcSolution={ch1.chaineCalculsSol} />
                            <Exercices name="Les entiers" src={ch1.revision} />
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </React.Fragment>
        
    );
}
