import React from 'react';
import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";
import {FiChevronsLeft} from 'react-icons/fi';

export default class NewIncident extends React.Component{
    render() {
        return (
            <div className={'jumbotron vertical-center'}>
                <div className={'container'}>
                    <div className="row">

                        {/*DESCRIPTION*/}
                        <div className="col-lg-2"></div>

                        <div className="col-lg-4 my-auto">
                            <img src={logo} alt="Be the hero logo"/>
                            <h2 className={'mt-5 mb-3'}>Cadastrar novo caso</h2>

                            <p>Descreva o caso detalhadamente para encontrar um herói disponível.</p>

                            <Link to={'/profile'} id={'sign-in'}>
                                <FiChevronsLeft color={'#e02041'}/>
                                <span className={'ml-2'}>Voltar para home</span>
                            </Link>
                        </div>

                        {/*CASE FORM*/}
                        <div className="col-lg-4 my-auto">
                            <form>
                                <div className="form-group mb-1">
                                    <input className={'form-control'} placeholder={'Título do caso'}/>
                                </div>

                                <div className="form-group mb-1">
                                    <textarea rows={5} className={'form-control'} placeholder={'Descrição'}/>
                                </div>

                                <div className="form-group mb-2">
                                    <input className={'form-control'} placeholder={'Valor em reais'}/>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-lg-4 mb-0">
                                        <input type="submit" className={'btn btn-outline-secondary btn-block'} value={'Cancelar'}/>
                                    </div>
                                    <div className="form-group col-lg-8 mb-0">
                                        <input type="submit" className={'btn btn-hero btn-block'} value={'Cadastrar'}/>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </div>
        );
    }
}