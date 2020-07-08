import React from 'react';
import logo from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';
import {FiLogIn} from 'react-icons/fi';
import {Link, withRouter} from 'react-router-dom';
import api from '../../services/api';

export default class Guest extends React.Component{

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
                        <h2 className={'mt-5 mb-1'}>Seja o herói,</h2>
                        <p className='mb-2'>encontre ONGS em sua região para apoiá-las!</p>

                        <Link to="incidents" className={'btn btn-hero btn-block mb-3'}>Quero ajudar</Link>

                        <Link to={'logon'} className={'link'}>
                            <FiLogIn/>
                            <span>Represento uma ONG</span>
                        </Link>
                    </div>
                    <div className="col-lg-1"></div>

                    {/*HEROES IMAGE*/}
                    <div className="col-lg-6 my-auto">
                        <img style={{width: '100%'}} src={heroes} className={'mt-5'} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}