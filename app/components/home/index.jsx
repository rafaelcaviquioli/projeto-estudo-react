import React from 'react';
import './style.css';

export default class Home extends React.Component {
    render() {
        return (
            <html lang="en">
                <head>
                    <title>Portal do cliente</title>
                </head>
                <body className="fixed-nav sticky-footer bg-dark" id="page-top">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                        <a className="navbar-brand" href="#">Portal do cliente</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                                <li className="nav-item active" data-toggle="tooltip" data-placement="right" title="Dashboard">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-fw fa-dashboard"></i>
                                        <span className="nav-link-text">
                                            Home</span>
                                    </a>
                                </li>
                                <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-fw fa-usd"></i>
                                        <span className="nav-link-text">
                                        Faturas</span>
                                    </a>
                                </li>
                                <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-fw fa-ticket"></i>
                                        <span className="nav-link-text">
                                            Chamados</span>
                                    </a>
                                </li>
                                <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-fw fa-shopping-cart"></i>
                                        <span className="nav-link-text">
                                            NF-e</span>
                                    </a>
                                </li>
                                <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-fw fa-lock"></i>
                                        <span className="nav-link-text">
                                            Alterar Senha</span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <i className="fa fa-fw fa-user"></i>
                                        Rafael Caviquioli
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                                        <i className="fa fa-fw fa-sign-out"></i>
                                        Sair</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className="content-wrapper">

                        <div className="container-fluid">

                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="breadcrumb-item active">...</li>
                            </ol>

                            <div className="row">
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-primary o-hidden h-100">
                                        <div className="card-body">
                                            <div className="card-body-icon">
                                                <i className="fa fa-fw fa-usd"></i>
                                            </div>
                                            <div className="mr-5">
                                                Faturas
                                            </div>
                                        </div>
                                        <a href="#" className="card-footer text-white clearfix small z-1">
                                            <span className="float-left">Ver detalhes</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-primary o-hidden h-100">
                                        <div className="card-body">
                                            <div className="card-body-icon">
                                                <i className="fa fa-fw fa-ticket"></i>
                                            </div>
                                            <div className="mr-5">
                                                Chamados
                                            </div>
                                        </div>
                                        <a href="#" className="card-footer text-white clearfix small z-1">
                                            <span className="float-left">Ver detalhes</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-success o-hidden h-100">
                                        <div className="card-body">
                                            <div className="card-body-icon">
                                                <i className="fa fa-fw fa-shopping-cart"></i>
                                            </div>
                                            <div className="mr-5">
                                                NF-e
                                            </div>
                                        </div>
                                        <a href="#" className="card-footer text-white clearfix small z-1">
                                            <span className="float-left">Ver detalhes</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-header">
                                    <i className="fa fa-area-chart"></i>
                                    Area Chart Example
                                </div>
                                <div className="card-body">
                                    <canvas id="myAreaChart" width="100%" height="30"></canvas>
                                </div>
                                <div className="card-footer small text-muted">
                                    Updated yesterday at 11:59 PM
                                </div>
                            </div>



                            <div className="card mb-3">
                                <div className="card-header">
                                    <i className="fa fa-table"></i>
                                    Data Table Example
          </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" width="100%" id="dataTable" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Office</th>
                                                    <th>Age</th>
                                                    <th>Start date</th>
                                                    <th>Salary</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Office</th>
                                                    <th>Age</th>
                                                    <th>Start date</th>
                                                    <th>Salary</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>Tiger Nixon</td>
                                                    <td>System Architect</td>
                                                    <td>Edinburgh</td>
                                                    <td>61</td>
                                                    <td>2011/04/25</td>
                                                    <td>$320,800</td>
                                                </tr>
                                                <tr>
                                                    <td>Garrett Winters</td>
                                                    <td>Accountant</td>
                                                    <td>Tokyo</td>
                                                    <td>63</td>
                                                    <td>2011/07/25</td>
                                                    <td>$170,750</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card-footer small text-muted">
                                    Updated yesterday at 11:59 PM
          </div>
                            </div>
                        </div>
                    </div>

                    <footer className="sticky-footer">
                        <div className="container">
                            <div className="text-center">
                                <small>Copyright &copy; Your Website 2017</small>
                            </div>
                        </div>
                    </footer>

                    <a className="scroll-to-top rounded" href="#page-top">
                        <i className="fa fa-angle-up"></i>
                    </a>

                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    Select "Logout" below if you are ready to end your current session.
          </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <a className="btn btn-primary" href="login.html">Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        )
    }
}
