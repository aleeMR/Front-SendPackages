import axios from 'axios';
import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

import Menu from '../../components/menu/menu.component';

class LoadStatus extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            cod: '',
            val: null,
            send: {},
            status: {},
            open: false,
        };
    }

    onChangeCod(event){
        let state = this.state;
        state.cod = event.target.value;
        this.setState(state);
    }
    onChangeStatus(event){
        let state = this.state;
        state.val = event.target.value;
        this.setState(state);
    }

    handleForm(event){ 
        event.preventDefault();
      
        let state = this.state;
        let cod = this.state.cod;

        axios.get(`${ process.env.REACT_APP_SERVER }/api/package/view/${ cod }`).
            then( res => {
                state.send = res.data.send;
                state.status = res.data.status;
                this.setState(state);
            }).catch(function () {
                alert("Error inesperado.")
            })
    }

    handleOpen() {
        let state = this.state;
        state.open = true;
        this.setState(state);
    }

    handleClose() {
        let state = this.state;
        state.open = false;
        this.setState(state);
    }

    handleStatus(event) {
        event.preventDefault();

        let cod = this.state.send.cod_send;
        let data = {
            status: parseInt(this.state.val)
        };
        
        axios.post(`${ process.env.REACT_APP_SERVER }/api/package/view/${ cod }`, data).
            then( res => {
                const msg = res.data.msg;
                alert(msg);
                this.handleClose();
                window.location.reload();
            }).catch(function () {
                alert("Error inesperado.")
            })
    }

    render () {
        return (
            <>
                <Menu />
                <div className="container-content container-home">
                    <h3 className="title">Consultar Estado de Envío</h3>
                    <Modal show={ this.state.open } onHide={ () => this.handleClose() }>
                        <Modal.Header closeButton>
                            <Modal.Title>Cambiar Estado</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form className="d-flex my-4" onSubmit={ this.handleStatus.bind(this) }>
                                <Form.Group className="me-3 text-left">
                                    <Form.Select value={ this.state.val } onChange={ this.onChangeStatus.bind(this) }  className="input-search">
                                        <option value={ 0 }>Recibido</option>
                                        <option value={ 1 }>En Proceso</option>
                                        <option value={ 2 }>En Camino</option>
                                        <option value={ 3 }>Cliente ha recibido paquete</option>
                                        <option value={ 4 }>Cancelado</option>
                                    </Form.Select>
                                </Form.Group>
                                <Button className="px-5 my-sm-0 style-button" type="submit">
                                    Guardar
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                    <Form className="d-flex" onSubmit={ this.handleForm.bind(this) }>
                        <Form.Group className="me-3 flex-grow-1 text-left">
                            <Form.Control
                                className="input-search me-sm-2"
                                type="text"
                                placeholder="Ingrese el código de envío o la cédula del cliente que recibió el pedido..."
                                value={ this.state.cod } 
                                onChange={ this.onChangeCod.bind(this) }
                            />
                        </Form.Group>
                        <Button className="px-5 my-sm-0 style-button" type="submit">
                            Buscar
                        </Button>
                    </Form>
                    <div className="container-table">
                        <Table className="table-hover">
                            <thead className="style-table-thead">
                                <tr>
                                    <th>Código</th>
                                    <th>ID Persona Origen</th>
                                    <th>ID Persona Destino</th>
                                    <th>Estado</th>
                                    <th>Editar</th>
                                </tr>
                            </thead>
                            <tbody className="style-table-tbody">
                                <tr>
                                    <td>{ this.state.send.cod_send }</td>
                                    <td>{ this.state.send.source_card }</td>
                                    <td>{ this.state.send.target_card }</td>
                                    <td>
                                        <span className={ "badge rounded-pill " + this.state.status.color }>{ this.state.status.msg }</span>
                                    </td>
                                    <td>
                                        { Object.keys(this.state.send).length === 0 ?
                                            ""
                                            : 
                                            <Button className="btn-outline" onClick={ () => this.handleOpen() }>
                                                Cambiar Estado
                                            </Button>
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </>
        );
    }
}

export default LoadStatus;