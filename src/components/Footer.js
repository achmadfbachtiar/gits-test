import React, { Component } from 'react';
import { Row, Col, Button, Input } from 'antd';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state ={
      current: 'latest-news'
    };
  }

  render() {
    const { email, password, rememberMe } = this.state;

    return(
      <div className="footer">
        <Row type="flex" gutter={32}>
          <Col span={6}>
            <p style={{fontSize: 16, fontWeight: '700', textTransform: 'uppercase'}}>
              Contact Us
            </p>
            <p>
              +62 22 87507720
            </p>
            <p>
              connect@gits.co.id
            </p>
            <p>
              Jl. Margacinta No. 29
            </p>
            <p>
              Bandung 40287
            </p>
          </Col>
          <Col span={8}>
            <p style={{fontSize: 16, fontWeight: '700', textTransform: 'uppercase'}}>
              Menu
            </p>
            <p>Politics</p>
            <p>Sports</p>
            <p>Technology</p>
            <p>Health</p>
          </Col>
          <Col span={10}>
            <p style={{fontSize: 16, fontWeight: '700'}}>
              Subscribe to GITS  newsletter via email
            </p>
            <p>
              Subscribe now and stay updated!
            </p>
            <Row type="flex">
              <Input size="large" placeholder="Email Address" style={{width: 250, marginRight: 20}} />
              <Button className="button-subscribe" size="large">
                Subscribe
              </Button>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
