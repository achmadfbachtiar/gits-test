import React, { Component } from 'react';
import { Row, Col, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import './Navbar.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state ={
      current: 'latest-news'
    };
  }

  render() {
    return(
      <Row className="navbar" type="flex" justify="start" align="middle">
        <Col span={2}>
          <Link to="/dashboard">
            <img className="logo" src={require('../assets/logo.png')}/>
          </Link>
        </Col>
        <Col span={12}>
        <Menu selectedKeys={[this.state.current]} mode="horizontal" onClick={(e) => this.setState({current: e.key})}>
          <Menu.Item className="menu" key="latest-news">
            <Link to="/dashboard">
              Latest News
            </Link>
          </Menu.Item>
          <Menu.Item className="menu" key="politics">
            <Link to="/dashboard">
              Politics
            </Link>
          </Menu.Item>
          <Menu.Item className="menu" key="sports">
            <Link to="/dashboard">
              Sports
            </Link>
          </Menu.Item>
          <Menu.Item className="menu" key="other">
            <Link to="/dashboard">
              Other
            </Link>
          </Menu.Item>
        </Menu>
        </Col>
        <Col span={10} type="flex" align="end">
        <Button className="button-search" shape="circle" icon="search" />
        <Button type="primary" className="button" shape="round">
          Daftar
        </Button>
        <a href="/login">
          <Button className="button" shape="round">
              Masuk
          </Button>
        </a>
        </Col>
      </Row>
    );
  }
}

export default Navbar;
