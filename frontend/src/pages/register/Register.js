import React from 'react';
import logo from "../../assets/logo.svg";
import {Link, withRouter} from "react-router-dom";
import {FiChevronsLeft} from 'react-icons/fi';
import api from '../../services/api';

export default class Register extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            whatsapp: '',
            city: '',
            uf: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const key = e.target.name;
        const value = e.target.value;
        this.setState({[key]: value});
    }

    // Submit the register form
    async handleSubmit(e){
        e.preventDefault()

        try{
            const response = await api.post('ongs', this.state);
            alert("Cadastrado com sucesso, sua ID é " + response.data.id);
            this.props.history.push('/');
        }catch (e) {
            console.log(e);
            alert("Erro ao cadastrar, tente novamente");
        }
    }

    render() {
        const {name, email, whatsapp, city, uf} = this.state;

        return (
            <div className={'jumbotron vertical-center'}>
                <div className={'container'}>
                    <div className="row">

                        {/*DESCRIPTIONS*/}
                        <div className="col-lg-2"></div>

                        <div className="col-lg-4 my-auto">
                            <img src={logo} alt="Be the hero logo"/>
                            <h2 className={'mt-5 mb-3'}>Cadastro</h2>

                            <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>

                            <Link to={'/'} id={'sign-in'}>
                                <FiChevronsLeft color={'#e02041'}/>
                                <span className={'ml-2'}>Já tenho cadastro</span>
                            </Link>
                        </div>

                        {/*SIGN IN FORM*/}
                        <div className="col-lg-4 my-auto">
                            <form onSubmit={this.handleSubmit} id={'logon-form'}>

                                <div className="form-group mb-1">
                                    <input name={'name'} value={name} onChange={this.handleChange} className={'form-control'} placeholder={'Nome da ONG'}/>
                                </div>

                                <div className="form-group mb-1">
                                    <input type='email' name={'email'} value={email} onChange={this.handleChange} className={'form-control'} placeholder={'E-mail'}/>
                                </div>

                                <div className="form-group mb-1">
                                    <input name={'whatsapp'} value={whatsapp} onChange={this.handleChange} className={'form-control'} placeholder={'Whatsapp'}/>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-lg-9">
                                        <input name={'city'} value={city} onChange={this.handleChange} className={'form-control'} placeholder={'Cidade'}/>
                                    </div>
                                    <div className="form-group col-lg-3">
                                        <input name={'uf'} value={uf} onChange={this.handleChange} maxLength={2} className={'form-control'} placeholder={'UF'}/>
                                    </div>
                                </div>

                                <input type="submit" className={'btn btn-hero btn-block'} value={'Cadastrar'}/>
                            </form>
                        </div>

                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </div>
        );
    }
}