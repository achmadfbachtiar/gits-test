import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Login } from './features/Login';
import { Dashboard } from './features/Dashboard';
import { NewsDetail } from './features/NewsDetail';
import { Navbar, Footer } from './components';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: ''
    };
  }

  componentWillMount() {
    this.setState({
      pathname: window.location.pathname
    })
  }

  render() {
    const { pathname } = this.state;
    if(window.location.pathname == "/"){
      window.location.href = '/login';
    }

    return(
      <div className='App'>
        {pathname != "/login" && <Navbar />}
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/news-detail" component={NewsDetail} />
        {pathname != "/login" && <Footer />}
      </div>
    )
  }
}

export default App;