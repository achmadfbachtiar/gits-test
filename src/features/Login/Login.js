import React, { Component } from 'react';
import { Card, Input, Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state ={
      email: "",
      password: "",
      rememberMe: false
    };
  }

  render() {
    const { email, password, rememberMe } = this.state;

    return(
      <div className="login-page">
        <Card className="login-form">
          <p className="logo-text">
            <span style={{color: "#35ace0"}}>GITS</span> <span style={{color: "#f89800"}}>NEWS</span>
          </p>
          <Input size="large" placeholder="email" onChange={(e) => this.setState({email: e.target.value})} value={email} />
          <br/>
          <br/>
          <Input.Password size="large" placeholder="password" onChange={(e) => this.setState({password: e.target.value})} value={password} />
          <br/>
          <br/>
          <Checkbox onChange={(e) => this.setState({rememberMe: e.target.checked})} checked={rememberMe}>
            Ingat saya
          </Checkbox>
          <Button className="button-forgot-password" type="link">
            Lupa password?
          </Button>
          <a href="/dashboard">
            <Button size="large" type="primary" block>
              LOGIN
            </Button>
          </a>
        </Card>
      </div>
    );
  }
}

export default Login;
