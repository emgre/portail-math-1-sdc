import React from 'react';
import { Helmet } from 'react-helmet';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import type { PageProps } from 'gatsby';
import { Layout } from '../components/layout';

// @ts-ignore
import logo from '../img/logo.png';

export default function Home(props: PageProps) {
    return (
        <React.Fragment>
            <Helmet>
                <title>Mathématique secondaire 1</title>
            </Helmet>
            <Layout>
                <Jumbotron style={{backgroundColor: "#4397ec"}}>
                    <Container>
                        <Row>
                            <Col>
                                <img src={logo} />
                                <h1 className="display-4">Bienvenue sur le site de cours de mathématiques secondaire 1</h1>
                                <p className="lead"> Mme Mireille & Mme Annie</p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </Layout>
        </React.Fragment>
    );
}
