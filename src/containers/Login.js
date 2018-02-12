import React, { Component } from 'react';
import { Card, CardTitle, Grid, Cell, TextField } from 'react-md';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import './Login.css';
import Button from 'react-md/lib/Buttons/Button';
import { validateEmail } from '../utils/validation';
import { loginUser } from '../store/actions/authAction';
import AdminLayout from './AdminLayout';

export class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: '',
          emailValidate: '',
        };
    
        this.onSubmit = this.onSubmit.bind(this);
        this.formValid = this.formValid.bind(this);
      }
    
      onSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
    
        this.props.dispatch(loginUser({ email, password }));
        this.setState({ email: '', password: '' });
      }
    
      formValid() {
        const { email, password } = this.state;
    
        return email.length > 0 && password.length > 0 && validateEmail(email);
      }

    render() {
        return (
            <AdminLayout>
                <Grid>
                    <Cell size={4}>

                    </Cell>
                    <Cell size={4}>
                        <Card>
                            <CardTitle title="Login" />
                            <form>
                                <Grid>
                                    <Cell size={12}>
                                        <TextField
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            label="Email"
                                            errorText="Email is required"
                                            onChange={email => this.setState({ email })}

                                            required
                                        />
                                    </Cell>
                                    <Cell size={12}>
                                        <TextField
                                            id="password"
                                            type="password"
                                            placeholder="***********"
                                            label="Password"
                                            errorText="Password is required"
                                            onChange={password => this.setState({ password })}
                                            required
                                        />
                                    </Cell>

                                    <Cell size={12}>
                                        <Button id='submit' children="Log In" type="submit" raised primary disabled={!this.formValid()}
                                            onClick={this.onSubmit}
                                        />
                                    </Cell>

                                </Grid>
                            </form>
                        </Card>
                    </Cell>
                    <Cell size={4}>

                    </Cell>
                </Grid>
            </AdminLayout>

        )
    }
}

Login.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Login);