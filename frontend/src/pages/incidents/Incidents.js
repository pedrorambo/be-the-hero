import React from 'react';
import logo from '../../assets/logo.svg';
import {FiPower, FiMail} from 'react-icons/fi';
import {FaWhatsapp} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import api from '../../services/api';

export default class Profile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            incidents: [],
        }
    }

    componentDidMount() {
        this.getIncidents();
    }

    async getIncidents(){
        const response = await api.get('incidents',{
            headers: {
                Authorization: localStorage.getItem('ongId'),
            }
        });

        this.setState({
            incidents: response.data
        });
    }


    rednerIncidents(){
        if(this.state.incidents.length > 0){
            return this.state.incidents.map(incident =>{
                const parsedValue = Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(incident.value);

                return(
                    <div key={incident.id} className="col-lg-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-11">
                                        <h5 className="card-title mt-2 mb-1">
                                            <span className={'my-auto'}>{incident.title}</span>
                                        </h5>
                                        <p className="card-text">{incident.description}</p>
                                        <h6>Valor: </h6>
                                        <span>{parsedValue}</span>

                                        <h6 className={'mt-3'}>Entrar em contato: </h6>
                                        <div>
                                            <button className={'btn btn-hero mr-2'}><FiMail/> E-mail</button>
                                            <button className={'btn btn-hero'}><FaWhatsapp className={'mr-1'}/>Whatsapp</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        }
    }

    render() {
        return (
            <div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-lg-12 d-flex">
                            <img src={logo} alt="Be the hero logo" width={160}/>
                            <span className={'ml-4 font-weight-bold my-auto'}>Clique em um caso para abri-lo.</span>
                            <div className={'d-flex ml-auto my-auto'}>
                                <Link to={'/'} className={'btn btn-outline-hero'}><FiPower/> Sair</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row mb-3">
                        <div className="col-lg-12">
                            <h3>Casos na sua região:</h3>
                        </div>
                    </div>
                    <div className="row">

                        {this.rednerIncidents()}

                    </div>
                </div>
            </div>
        );
    }
}