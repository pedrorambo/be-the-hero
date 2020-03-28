import React from 'react';
import logo from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';
import {FiLogIn} from 'react-icons/fi';
import './styles.css';
import {Link} from 'react-router-dom';

export default class Logon extends React.Component{
    render() {
        return (
            <div className={'container'}>
                <div className="row">

                    {/*LOGON FORM*/}
                    <div className="col-lg-1" />
                    <div className="col-lg-4 my-auto">
                        <img src={logo} alt="Be the hero logo"/>
                        <h2 className={'mt-5 mb-3'}>Faça seu logon</h2>

                        <form id={'logon-form'}>
                            <div className="form-group">
                                <input className={'form-control'} placeholder={'Sua id'}/>
                                <input type="submit" className={'btn btn-hero btn-block mt-3'}/>
                            </div>
                        </form>
                        <Link to={'register'} id={'sign-in'}>
                            <FiLogIn color={'#e02041'}/>
                            <span className={'ml-2'}>Não tenho cadastro</span>
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