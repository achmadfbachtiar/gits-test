import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './SideNews.css';

class SideNews extends Component {
  constructor(props) {
    super(props);
    this.state ={
    };
  }

  render() {
    const { key, data } = this.props;
    return(
      <Row className="news-wrapper" type="flex" key={key}>
        <Col span={6}>
          <div className="news-image" style={{background: 'url('+data.urlToImage+')'}}></div>
        </Col>
        <Col span={18}>
          <p className="sidenews-category">
            General
          </p>
          <p className="sidenews-title">
            {data.title}
          </p>
        </Col>
      </Row>
    );
  }
}

export default SideNews;
