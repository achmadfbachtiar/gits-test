import React, { Component } from 'react';
import { Row, Col, Menu, Icon, Button, Card, Input, Carousel, Skeleton, Spin } from 'antd';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { Navbar, Footer, SideNews } from '../../components';
import { HightlightNews, LatestNews } from './';
import axios from 'axios';
import { url, headers } from '../../Default';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state ={
      current: 'latest-news',
      isLoading: false,
      latestNews: [],
      trendingNews: [],
      highlightNews: []
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
      this.setLatestNews(data);
      this.setTrendingNews(data);
      this.setHighlightNews(data);
    }
  }

  setLatestNews(data) {
    this.setState({
      isLoading: false,
      latestNews: data.data.articles
    })
  }

  setTrendingNews(data) {
    this.setState({
      isLoading: false,
      trendingNews: data.data.articles.slice(0, 5)
    })
  }

  setHighlightNews(data) {
    this.setState({
      isLoading: false,
      highlightNews: data.data.articles.slice(0, 3)
    })
  }

  renderLoading() {
    return(
      <div style={{width: '100%'}}>
        <Col className="loading-skeleton" span={12} active>
          <Skeleton />
        </Col>
        <Col className="loading-skeleton" span={12} active>
          <Skeleton />
        </Col>
        <Col className="loading-skeleton" span={12} active>
          <Skeleton />
        </Col>
        <Col className="loading-skeleton" span={12} active>
          <Skeleton />
        </Col>
      </div>
    )
  }

  render() {
    const { latestNews, trendingNews, highlightNews, isLoading } = this.state;

    return(
      <div className="dashboard-page">
        <div className="wrapper">
          <Row type="flex" gutter={32}> 
            <Col span={16}>
              {isLoading ?
                <Row className="highlight-loading-wrapper" type="flex" justify="center" align="middle">
                  <Spin />
                </Row>
              :
                <HightlightNews data={highlightNews} />
              }
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
            </Col>
          </Row>
          <Row type="flex" justify="space-between" gutter={32} style={{marginTop: 50}}> 
            <p className="section-title">
              Latest News
            </p>
            <p className="see-all-news-link">
              See All
            </p>
            <div className="divider"></div>
            {isLoading?
                this.renderLoading()
              :
              latestNews.map((data, index) => {
                return(
                  <LatestNews key={index} data={data} />
                )
              })
            }
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboard;
