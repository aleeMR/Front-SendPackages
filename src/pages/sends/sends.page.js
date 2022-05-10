import { useParams } from "react-router-dom";
import axios from 'axios';
import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Menu from '../../components/menu/menu.component'

function withParams(Component) {
    return props => <Component { ...props } params={ useParams() } />;
}

class Sends extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            source_card: null,
            source_name: null,
            source_email: null,
            source_street: null,
            source_city: null,
            source_province: null,
            source_postal_code: null,
            source_country_code: null,
            target_card: null,
            target_name: null,
            target_email: null,
            target_street: null,
            target_city: null,
            target_province: null,
            target_postal_code: null,
            target_country_code: null,
            length: null,
            width: null,
            height: null,
            dimensions_unit: null,
            weight: null,
            weight_unit: null
        };
    }

    onChangeSourceCard(event){
        let state = this.state;
        state.source_card = event.target.value;
        this.setState(state);
    }
    onChangeSourceName(event){
        let state = this.state;
        state.source_name = event.target.value;
        this.setState(state);
    }
    onChangeSourceEmail(event){
        let state = this.state;
        state.source_email = event.target.value;
        this.setState(state);
    }
    onChangeSourceStreet(event){
        let state = this.state;
        state.source_street = event.target.value;
        this.setState(state);
    }
    onChangeSourceProvince(event){
        let state = this.state;
        state.source_province = event.target.value;
        this.setState(state);
    }
    onChangeSourceCity(event){
        let state = this.state;
        state.source_city = event.target.value;
        this.setState(state);
    }
    onChangeSourcePostalCode(event){
        let state = this.state;
        state.source_postal_code = event.target.value;
        this.setState(state);
    }
    onChangeSourceCountryCode(event){
        let state = this.state;
        state.source_country_code = event.target.value;
        this.setState(state);
    }

    onChangeTargetCard(event){
        let state = this.state;
        state.target_card = event.target.value;
        this.setState(state);
    }
    onChangeTargetName(event){
        let state = this.state;
        state.target_name = event.target.value;
        this.setState(state);
    }
    onChangeTargetEmail(event){
        let state = this.state;
        state.target_email = event.target.value;
        this.setState(state);
    }
    onChangeTargetStreet(event){
        let state = this.state;
        state.target_street = event.target.value;
        this.setState(state);
    }
    onChangeTargetProvince(event){
        let state = this.state;
        state.target_province = event.target.value;
        this.setState(state);
    }
    onChangeTargetCity(event){
        let state = this.state;
        state.target_city = event.target.value;
        this.setState(state);
    }
    onChangeTargetPostalCode(event){
        let state = this.state;
        state.target_postal_code = event.target.value;
        this.setState(state);
    }
    onChangeTargetCountryCode(event){
        let state = this.state;
        state.target_country_code = event.target.value;
        this.setState(state);
    }

    onChangeLength(event){
        let state = this.state;
        state.length = event.target.value;
        this.setState(state);
    }
    onChangeWidth(event){
        let state = this.state;
        state.width = event.target.value;
        this.setState(state);
    }
    onChangeHeight(event){
        let state = this.state;
        state.height = event.target.value;
        this.setState(state);
    }
    onChangeDimensionsUnit(event){
        let state = this.state;
        state.dimensions_unit = event.target.value;
        this.setState(state);
    }
    onChangeWeight(event){
        let state = this.state;
        state.weight = event.target.value;
        this.setState(state);
    }
    onChangeWeightUnit(event){
        let state = this.state;
        state.weight_unit = event.target.value;
        this.setState(state);
    }

    handleForm(event){
        event.preventDefault();

        let data = {
            source_card: this.state.source_card,
            source_name: this.state.source_name,
            source_email: this.state.source_email,
            source_street: this.state.source_street,
            source_city: this.state.source_city,
            source_province: this.state.source_province,
            source_postal_code: this.state.source_postal_code,
            source_country_code: this.state.source_country_code,
            target_card: this.state.target_card,
            target_name: this.state.target_name,
            target_email: this.state.target_email,
            target_street: this.state.target_street,
            target_city: this.state.target_city,
            target_province: this.state.target_province,
            target_postal_code: this.state.target_postal_code,
            target_country_code: this.state.target_country_code,
            length: parseFloat(this.state.length),
            width: parseFloat(this.state.width),
            height: parseFloat(this.state.height),
            dimensions_unit: this.state.dimensions_unit,
            weight: parseFloat(this.state.weight),
            weight_unit: this.state.weight_unit
        };

        axios.post(`${ process.env.REACT_APP_SERVER }/api/package/send`, data)
            .then( res => {
                const msg = res.data.msg;
                alert(msg);
                window.location.reload();
            }).catch(function () {
                alert("Error inesperado.");
            })
    }

    render () {
        return (
            <>
                <Menu />
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6}>
                        <div className="container-content">
                            <Form onSubmit={ this.handleForm.bind(this) }>
                                <h3>Enviar Paquete</h3>
                                <Tabs defaultActiveKey="source" id="uncontrolled-tab-example" className="style-tabs">
                                    <Tab eventKey="source" title="Dirección Origen" className="container-tabBody">
                                        <div className="container-input">
                                            <Form.Group className="mb-3 text-left">
                                                <Form.Label className="style-label">Documento de Identidad</Form.Label>
                                                <Form.Control 
                                                    className="form-control-sm"
                                                    required
                                                    type="text"
                                                    value={ this.state.source_card } 
                                                    onChange={ this.onChangeSourceCard.bind(this) }
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 text-left" >
                                                <Form.Label>Nombres</Form.Label>
                                                <Form.Control
                                                    className="form-control-sm"
                                                    required
                                                    type="text"
                                                    value={ this.state.source_name }
                                                    onChange={ this.onChangeSourceName.bind(this) }
                                                />
                                            </Form.Group>
                                        </div>
                                        <Form.Group className="mb-3 text-left" >
                                            <Form.Label>Correo Eléctronico</Form.Label>
                                            <Form.Control
                                                className="form-control-sm"
                                                required
                                                type="email"
                                                value={ this.state.source_email }
                                                onChange={ this.onChangeSourceEmail.bind(this) }
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3 text-left">
                                            <Form.Label>Dirección</Form.Label>
                                            <Form.Control
                                                className="form-control-sm"
                                                required
                                                type="text"
                                                value={ this.state.source_street } 
                                                onChange={ this.onChangeSourceStreet.bind(this) }
                                            />
                                        </Form.Group>
                                        <div className="container-input">
                                            <Form.Group className="mb-3 text-left">
                                                <Form.Label>Provincia</Form.Label>
                                                <Form.Control
                                                    className="form-control-sm"
                                                    required
                                                    type="text"
                                                    value={ this.state.source_province } 
                                                    onChange={ this.onChangeSourceProvince.bind(this) }
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 text-left" >
                                                <Form.Label>Ciudad</Form.Label>
                                                <Form.Control
                                                    className="form-control-sm"
                                                    required
                                                    type="text"
                                                    value={ this.state.source_city }
                                                    onChange={ this.onChangeSourceCity.bind(this) }
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="container-input">
                                            <Form.Group className="mb-3 text-left">
                                                <Form.Label>Código Postal</Form.Label>
                                                <Form.Control
                                                    className="form-control-sm"
                                                    required
                                                    type="text"
                                                    value={ this.state.source_postal_code } 
                                                    onChange={ this.onChangeSourcePostalCode.bind(this) }
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 text-left" >
                                                <Form.Label>Código de País</Form.Label>
                                                <Form.Control
                                                    className="form-control-sm"
                                                    required
                                                    type="text"
                                                    value={ this.state.source_country_code }
                                                    onChange={ this.onChangeSourceCountryCode.bind(this) }
                                                />
                                            </Form.Group>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="target" title="Dirección Destino" className="container-tabBody">
                                        <div className="container-input">
                                            <Form.Group className="mb-3 text-left">
                                                <Form.Label>Documento de Identidad</Form.Label>
                                                <Form.Control
                                                    className="form-control-sm"
                                                    required
                                                    type="text"
                                                    value={ this.state.target_card } 
                                                    onChange={ this.onChangeTargetCard.bind(this) }
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 text-left" >
                                                <Form.Label>Nombres</Form.Label>
                                                <Form.Control
                                                    className="form-control-sm"
                                                    required
                                                    type="text"
                                                    value={ this.state.target_name }
                                                    onChange={ this.onChangeTargetName.bind(this) }
                                                />
                                            </Form.Group>
                                        </div>
                                        <Form.Group className="mb-3 text-left" >
                                            <Form.Label>Correo Eléctronico</Form.Label>
                                            <Form.Control
                                                className="form-control-sm"
                                                required
                                                type="email"
                                                value={ this.state.target_email }
                                                onChange={ this.onChangeTargetEmail.bind(this) }
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3 text-left">
                                            <Form.Label>Dirección</Form.Label>
                                            <Form.Control
                                                className="form-control-sm"
                                                required
                                                type="text"
                                                value={ this.state.target_street } 
                                                onChange={ this.onChangeTargetStreet.bind(this) }
                                            />
                                        </Form.Group>
                                        <div className="container-input">
                                            <Form.Group className="mb-3 text-left">
                                                <Form.Label>Provincia</Form.Label>
                                                <Form.Control
                                                    className="form-control-sm"
                                                    required
                                                    type="text"
                                                    value={ this.state.target_province } 
                                                    onChange={ this.onChangeTargetProvince.bind(this) }
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 text-left" >
                                                <Form.Label>Ciudad</Form.Label>
                                                <Form.Control
                                                    className="form-control-sm"
                                                    required
                                                    type="text"
                                                    value={ this.state.target_city }
                                                    onChange={ this.onChangeTargetCity.bind(this) }
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="container-input">
                                            <Form.Group className="mb-3 text-left">
                                                <Form.Label>Código Postal</Form.Label>
                                                <Form.Control
                                                    className="form-control-sm"
                                                    required
                                                    type="text"
                                                    value={ this.state.target_postal_code } 
                                                    onChange={ this.onChangeTargetPostalCode.bind(this) }
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 text-left" >
                                                <Form.Label>Código de País</Form.Label>
                                                <Form.Control
                                                    className="form-control-sm"
                                                    required
                                                    type="text"
                                                    value={ this.state.target_country_code }
                                                    onChange={ this.onChangeTargetCountryCode.bind(this) }
                                                />
                                            </Form.Group>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="package" title="Paquete" className="container-tabBody">
                                        <div className="container-input">
                                            <Form.Group className="mb-3 text-left">
                                                <Form.Label>Largo</Form.Label>
                                                <Form.Control
                                                    className="form-control-sm"
                                                    required
                                                    type="number"
                                                    step=".01"
                                                    value={ this.state.length } 
                                                    onChange={ this.onChangeLength.bind(this) }
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 text-left" >
                                                <Form.Label>Ancho</Form.Label>
                                                <Form.Control
                                                    className="form-control-sm"
                                                    required
                                                    type="number"
                                                    step=".01"
                                                    value={ this.state.width }
                                                    onChange={ this.onChangeWidth.bind(this) }
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="container-input">
                                            <Form.Group className="mb-3 text-left">
                                                <Form.Label>Alto</Form.Label>
                                                <Form.Control
                                                    className="form-control-sm"
                                                    required
                                                    type="number"
                                                    step=".01"
                                                    value={ this.state.height } 
                                                    onChange={ this.onChangeHeight.bind(this) }
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 text-left" >
                                                <Form.Label>Unidades de Dimensión</Form.Label>
                                                <Form.Control
                                                    className="form-control-sm"
                                                    required
                                                    type="text"
                                                    value={ this.state.dimensions_unit }
                                                    onChange={ this.onChangeDimensionsUnit.bind(this) }
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="container-input">
                                            <Form.Group className="mb-3 text-left">
                                                <Form.Label>Peso</Form.Label>
                                                <Form.Control
                                                    className="form-control-sm"
                                                    required
                                                    type="number"
                                                    step=".01"
                                                    value={ this.state.weight } 
                                                    onChange={ this.onChangeWeight.bind(this) }
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 text-left" >
                                                <Form.Label>Unidades de Peso</Form.Label>
                                                <Form.Control
                                                    className="form-control-sm"
                                                    required
                                                    type="text"
                                                    value={ this.state.weight_unit }
                                                    onChange={ this.onChangeWeightUnit.bind(this) }
                                                />
                                            </Form.Group>
                                        </div>
                                        <Button type="submit" className="style-button">
                                            Enviar
                                        </Button>
                                    </Tab>
                                </Tabs>
                            </Form>
                        </div>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </>
        );
    }
};

export default withParams(Sends);