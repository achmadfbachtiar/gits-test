import React, { Component } from 'react';
import { Col } from 'antd';
import { Link } from 'react-router-dom';
import './LatestNews.css';

class LatestNews extends Component {
  constructor(props) {
    super(props);
    this.state ={

    };
  }

  render() {
    const { key, data } = this.props;

    return(
      <Col span={12} key={key}>
        <Link 
          to={{
            pathname: "/news-detail",
            state: {data}
          }}
        >
          <div className="news-card">
            <div className="cover-image" style={{background: 'url('+data.urlToImage+')'}}>
              <div className="category-wrapper">
                <p className="category-name">
                  General
                </p>
              </div>
            </div>
            <p className="title">
              {data.title}
            </p>
            <p className="description">
              {data.description}
            </p>
          </div>
        </Link>
      </Col>
    );
  }
}

export default LatestNews;
