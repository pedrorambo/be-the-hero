import React from 'react';
import logo from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';
import {FiLogIn, FiChevronsLeft} from 'react-icons/fi';
import {Link, withRouter} from 'react-router-dom';
import api from '../../services/api';

export default class Logon extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            id: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const key = e.target.name;
        const value = e.target.value;
        this.setState({[key]: value});
    }

    async handleSubmit(e){
        e.preventDefault();
        const {id} = this.state;

        try{
            const response = await api.post('session', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            this.props.history.push('profile');
        }catch (e) {
            alert("Não foi possível fazer login");
        }
    }

    render() {
        return (
            <div className={'container'}>
                <div className="row">

                    {/*LOGON FORM*/}
                    <div className="col-lg-1" />
                    <div className="col-lg-4 my-auto">
                        <img src={logo} alt="Be the hero logo"/>
                        <h2 className={'mt-5 mb-3'}>Faça seu logon</h2>

                        <form id={'logon-form'} onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input
                                    name={'id'}
                                    value={this.state.id}
                                    onChange={this.handleChange}
                                    className={'form-control'}
                                    placeholder={'Sua id'}
                                />
                                <input type="submit" className={'btn btn-hero btn-block mt-3'}/>
                            </div>
                        </form>
                        <Link to={'register'} className={'link'}>
                            <FiLogIn/>
                            <span className={'ml-1'}>Não tenho cadastro</span>
                        </Link>
                        <br/>
                        <Link to={'/'} className={'link'}>
                            <FiChevronsLeft/>
                            <span className={'ml-1'}>Voltar</span>
                        </Link>
                    </div>
                    <div className="col-lg-1"/>

                    {/*HEROES IMAGE*/}
                    <div className="col-lg-6 my-auto">
                        <img style={{width: '100%'}} src={heroes} className={'mt-5'} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}