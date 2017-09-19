import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import * as actions from './actions';
import './style.css';

const LoginForm = (props) => {
    const { handleSubmit, loading, success, failed, requestError } = props;
    return (
        <form className="form-signin" onSubmit={handleSubmit}>
            <h2 className="form-signin-heading">Login</h2>

            <label htmlFor="inputEmail" className="sr-only">E-mail</label>
            <Field
                name="email"
                component="input"
                type="email"
                className="form-control"
                placeholder="E-mail"
                required
                autoFocus
                disabled={loading}
            />
            <label htmlFor="inputPassword" className="sr-only">Senha</label>
            <Field
                name="password"
                component="input"
                type="password"
                className="form-control"
                placeholder="Senha"
                disabled={loading}
            />

            {failed && <div className="alert alert-danger">E-mail ou senha incorretos.</div>}
            {requestError && <div className="alert alert-danger">Erro ao autenticar.</div>}

            <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
            >
                {success ? 'Autenticado!' : ''}
                {loading ? 'Verificando...' : 'Entrar'}
            </button>
        </form>
    );
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const mapStateToProps = state => ({
    loading: state.login.loading,
    success: state.login.success,
    failed: state.login.failed,
    requestError: state.login.error
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (values) => {
        dispatch(actions.login(values.email, values.password));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxForm);