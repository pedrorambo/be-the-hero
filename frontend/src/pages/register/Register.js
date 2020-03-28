import React from 'react';
import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";
import {FiChevronsLeft} from 'react-icons/fi';

export default class Register extends React.Component{
    render() {
        return (
            <div className={'container'}>
                <div className="row">

                    {/*LOGON FORM*/}
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

                    {/*HEROES IMAGE*/}
                    <div className="col-lg-4 my-auto">
                        <form id={'logon-form'}>

                            <div className="form-group mb-1">
                                <input className={'form-control'} placeholder={'Nome da ONG'}/>
                            </div>

                            <div className="form-group mb-1">
                                <input type='email' className={'form-control'} placeholder={'E-mail'}/>
                            </div>

                            <div className="form-group mb-1">
                                <input className={'form-control'} placeholder={'Whatsapp'}/>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-lg-9">
                                    <input className={'form-control'} placeholder={'Cidade'}/>
                                </div>
                                <div className="form-group col-lg-3">
                                    <input className={'form-control'} placeholder={'UF'}/>
                                </div>
                            </div>
                            
                            <input type="submit" className={'btn btn-hero btn-block'} value={'Cadastrar'}/>
                        </form>
                    </div>

                    <div className="col-lg-2"></div>
                </div>
            </div>
        );
    }
}