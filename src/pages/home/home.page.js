import React from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Menu from '../../components/menu/menu.component'

class Home extends React.Component {
    render () {
        return (
            <>
                <Menu />
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <CardGroup className="container-home-card">
                            <Card className="p-4">
                                <Card.Body>
                                    <h3 className="title-home">ENVÍO DE PAQUETES</h3>
                                    <h5 className="mb-5">Taller 2</h5>
                                    <h6>Servicios:</h6>
                                    <ul className="text-left">
                                        <li>
                                            <strong>Ver Envíos</strong><br />
                                            <p className="small">Ruta para consultar todos los envíos asociados a un cliente</p>
                                        </li>
                                        <li>
                                            <strong>Ver Estados</strong><br />
                                            <p className="small">
                                                Ruta para consultar el estado del envío por código de envío y/o cédula de cliente<br />
                                                Ruta para marcar los estados de un envío
                                            </p>
                                        </li>
                                        <li>
                                            <strong>Enviar Paquete</strong><br />
                                            <p className="small">Ruta para enviar un paquete</p>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                            <Card>
                                <img src="/home.jpg" className="home-photo" alt="home"/>
                            </Card>
                        </CardGroup>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </>
        );
    }
};

export default Home;