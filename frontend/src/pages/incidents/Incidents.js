import React from 'react';
import logo from '../../assets/logo.svg';
import {FiPower} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

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

    openIncident(id){
        this.props.history.push(`/incident/${id}`);
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
                        <div className="card mb-4 incident-click" onClick={() => this.openIncident(incident.id)}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
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
                            <Link to={'/'}><img src={logo} alt="Be the hero logo" width={160}/></Link>
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