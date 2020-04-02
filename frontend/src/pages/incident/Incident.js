import React from 'react';
import logo from '../../assets/logo.svg';
import {FiPower} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import api from '../../services/api';

export default class Incident extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            incident: {},
        }
    }

    componentDidMount() {
        this.getIncident();
    }

    async getIncident(){
        try{
            const response = await api.get(`incidents/${this.props.match.params.id}`,{
                headers: {
                    Authorization: localStorage.getItem('ongId'),
                }
            });

            this.setState({
                incident: response.data
            });
        }catch (e) {
            console.log(e);
            alert("Erro ao buscar informações da ONG");
        }
    }

    render() {
        const {incident} = this.state;

        const parsedValue = Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(incident.value);

        return (
            <div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-lg-12 d-flex">
                            <Link to={'/'}><img src={logo} alt="Be the hero logo" width={160}/></Link>
                            <span className={'ml-4 font-weight-bold my-auto'}>Clique em um caso para abri-lo.</span>
                            <div className={'d-flex ml-auto my-auto'}>
                                <Link to={'/'} className={'btn btn-outline-hero'}><FiPower/> Sair</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div key={incident.id} className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-11">
                                            <h5 className="card-title mb-1">
                                                <span className={'my-auto'}>{incident.title}</span>
                                            </h5>
                                            <p className="card-text">{incident.description}</p>
                                            <h6>Valor: </h6>
                                            <span>{parsedValue}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div key={incident.id} className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-11">
                                            <h5 className="card-title mb-1">
                                                <span className={'text-center'}>{incident.name}</span>
                                            </h5>
                                            <p className="card-text">{incident.city}</p>
                                            <button className={'btn btn-hero'}>E-mail</button>
                                            <button className={'btn btn-hero'}>E-mail</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}