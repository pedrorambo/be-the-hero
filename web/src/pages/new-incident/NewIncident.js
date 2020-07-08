import React from 'react';
import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";
import {FiChevronsLeft} from 'react-icons/fi';
import api from "../../services/api";

export default class NewIncident extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({[key]: value});
    }

    // Submit the form
    async handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post('incidents', this.state,
                {
                    headers: {
                        Authorization: localStorage.getItem('ongId'),
                    }
                });
            alert("Caso cadastrado com sucesso!");
            this.props.history.push('/profile');
        } catch (e) {
            console.log(e);
            alert("Erro ao cadastrar caso, tente novamente!");
        }
    }

    render() {
        const {title, description, value} = this.state;

        return (
            <div className={'jumbotron vertical-center'}>
                <div className={'container'}>
                    <div className="row">

                        {/*DESCRIPTION*/}
                        <div className="col-lg-2"/>

                        <div className="col-lg-4 my-auto">
                            <img src={logo} alt="Be the hero logo"/>
                            <h2 className={'mt-5 mb-3'}>Cadastrar novo caso</h2>

                            <p>Descreva o caso detalhadamente para encontrar um herói disponível.</p>

                            <Link to={'/profile'} className={'link'}>
                                <FiChevronsLeft/>
                                <span>Voltar para home</span>
                            </Link>
                        </div>

                        {/*INCIDENT FORM*/}
                        <div className="col-lg-4 my-auto">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group mb-1">
                                    <input name={'title'} value={title} onChange={this.handleChange}
                                           className={'form-control'} placeholder={'Título do caso'}/>
                                </div>

                                <div className="form-group mb-1">
                                    <textarea name={'description'} value={description} onChange={this.handleChange}
                                              rows={5} className={'form-control'} placeholder={'Descrição'}/>
                                </div>

                                <div className="form-group mb-2">
                                    <input name={'value'} value={value} onChange={this.handleChange}
                                           className={'form-control'} placeholder={'Valor em reais'}/>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-lg-4 mb-0">
                                        <Link to={'/profile'}>
                                            <button type='button' className={'btn btn-outline-secondary btn-block'}>Cancelar</button>
                                        </Link>
                                    </div>
                                    <div className="form-group col-lg-8 mb-0">
                                        <input type="submit" className={'btn btn-hero btn-block'} value={'Cadastrar'}/>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-2"/>
                    </div>
                </div>
            </div>
        );
    }
}