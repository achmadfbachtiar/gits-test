import React, { Component } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './NewsDetail.css';
import { Navbar, Footer, SideNews } from '../../components';
import axios from 'axios';
import { url, headers } from '../../Default';

class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state ={
      isLoading: false,
      trendingNews: [],
      popularNews: []
    };
  }

  componentDidMount() {
    this.getArticles();
  }

  async getArticles() {
    this.setState({
      isLoading: true
    })

    let res = axios({
      method: 'get',
      url: url + '/top-headlines?country=id',
      headers: headers
    });
    let data = await res;
    if(data.data.status == "ok"){
      this.setTrendingNews(data);
      this.setPopularNews(data);
    }
  }

  setTrendingNews(data) {
    this.setState({
      isLoading: false,
      trendingNews: data.data.articles.slice(0, 5)
    })
  }

  setPopularNews(data) {
    this.setState({
      isLoading: false,
      popularNews: data.data.articles.slice(0, 5)
    })
  }

  render() {
    const { trendingNews, popularNews, isLoading } = this.state;
    const { data } = this.props.location.state;

    return(
      <div className="detail-page">
        <Row type="flex" gutter={32}>
          <Col span={16}>
            <p style={{color: '#999999', fontWeight: '700'}}>
              {moment(data.publishedAt).format('dddd DD MMMM YYYY')}
            </p>
            <p style={{fontSize: 22, fontWeight: '700'}}>
              {data.title}
            </p>
            <img src={data.urlToImage} style={{width: '100%'}} />
            <br/>
            <br/>
            <p>
              {data.content}
            </p>
          </Col>
          <Col span={8}>
            <p className="section-title">
              Trending News
            </p>
            <div className="divider"></div>
            {isLoading?
              <Skeleton />
            :
              trendingNews.map((data, index) => {
                return(
                  <Link 
                    to={{
                      pathname: "/news-detail",
                      state: {data}
                    }}
                  >
                    <SideNews key={index} data={data} />
                  </Link>
                )
              })
            }
            <br/>
            <p className="section-title">
              Popular News
            </p>
            <div className="divider"></div>
            {isLoading?
              <Skeleton />
            :
              popularNews.map((data, index) => {
                return(
                  <Link 
                    to={{
                      pathname: "/news-detail",
                      state: {data}
                    }}
                  >
                    <SideNews key={index} data={data} />
                  </Link>
                )
              })
            }
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewsDetail;
