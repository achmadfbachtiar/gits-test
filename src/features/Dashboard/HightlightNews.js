import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import './HightlightNews.css';

class HightlightNews extends Component {
  constructor(props) {
    super(props);
    this.state ={

    };
  }

  render() {
    const {data} = this.props;
    return(
      <Carousel autoplay>
        {data.map((data, index) => {
          return(
            <div>
              <div className="background-image" style={{background: 'url('+data.urlToImage+')'}}>
                <Row className="text-wrapper" type="flex">
                  <div className="bar"></div>
                  <Link 
                    to={{
                      pathname: "/news-detail",
                      state: {data}
                    }}
                  >
                    <div className="title-wrapper">
                      <p className="highlight-category">
                        General
                      </p>
                      <p className="highlight-title">
                        {data.title}
                      </p>
                    </div>
                  </Link>
                </Row>
              </div>
            </div>
          )
        })}
      </Carousel>
    );
  }
}

export default HightlightNews;
