import axios from 'axios';
import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

import Menu from '../../components/menu/menu.component';

class LoadSends extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            card: '',
            sendsSource: [],
            sendsTarget: []
        };
    }

    onChangeCard(event){
        let state = this.state;
        state.card = event.target.value;
        this.setState(state);
    }

    handleForm(event){ 
        event.preventDefault();

        let state = this.state;
        let card = this.state.card;

        axios.get(`${ process.env.REACT_APP_SERVER }/api/package/search/${ card }` 
            ).then( res => {
                state.sendsSource = res.data.sendsSource;
                state.sendsTarget = res.data.sendsTarget;
                this.setState(state);
            }).catch(function () {
                alert("Error inesperado.")
            })
    }

    render () {
        return (
            <>
                <Menu />
                <div className="container-content container-home">
                    <h3 className="title">Consultar Envíos por Cliente</h3>
                    <Form className="d-flex" onSubmit={ this.handleForm.bind(this) }>
                        <Form.Group className="me-3 flex-grow-1 text-left">
                            <Form.Control
                                className="input-search me-sm-2"
                                type="text"
                                placeholder="Ingrese el código del cliente a consultar..."
                                value={ this.state.card } 
                                onChange={ this.onChangeCard.bind(this) }
                            />
                        </Form.Group>
                        <Button className="px-5 my-sm-0 style-button" type="submit">
                            Buscar
                        </Button>
                    </Form>
                    
                    <div className="container-table">
                        <h6>Envíos Realizados</h6>
                        <Table className="table-hover">
                            <thead className="style-table-thead">
                                <tr>
                                    <th>Código</th>
                                    <th>Ciudad Origen</th>
                                    <th>Provincia Origen</th>
                                    <th>Ciudad Destino</th>
                                    <th>Provincia Destino</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody className="style-table-tbody">
                                {
                                    this.state.sendsSource.map((send) =>
                                        <tr>
                                            <td>{ send.cod_send }</td>
                                            <td>{ send.source_province }</td>
                                            <td>{ send.source_city }</td>
                                            <td>{ send.target_province }</td>
                                            <td>{ send.target_city }</td>
                                            <td>
                                                <span className={ "badge rounded-pill " + send.status.color }>{ send.status.msg }</span>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>

                    <div className="container-table">
                        <h6>Envíos Recibidos</h6>
                        <Table className="table-hover">
                            <thead className="style-table-thead">
                                <tr>
                                    <th>Código</th>
                                    <th>Ciudad Origen</th>
                                    <th>Provincia Origen</th>
                                    <th>Ciudad Destino</th>
                                    <th>Provincia Destino</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody className="style-table-tbody">
                                {
                                    this.state.sendsTarget.map((send) =>
                                        <tr>
                                            <td>{ send.cod_send }</td>
                                            <td>{ send.source_province }</td>
                                            <td>{ send.source_city }</td>
                                            <td>{ send.target_province }</td>
                                            <td>{ send.target_city }</td>
                                            <td>
                                                <span className={ "badge rounded-pill " + send.status.color }>{ send.status.msg }</span>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </>
        );
    }
}

export default LoadSends;