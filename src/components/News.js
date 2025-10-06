import React, { Component } from 'react';
import Newsitems from './Newsitems';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinning from './loading'
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress: PropTypes.func,
    apikey: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
    const capitalizedCategory = this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1);
    document.title = `${capitalizedCategory} - NewsApp`;
  }
  async componentDidMount() {
    this.updateNews();
  }
  updateNews = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    this.props.setProgress(30);
    try {
      let data = await fetch(url);
      let parsedata = await data.json();
      this.props.setProgress(70);
      this.setState({
        articles: parsedata.articles || [],
        totalResults: parsedata.totalResults || 0,
        loading: false
      });
    } catch (error) {
      this.setState({
        articles: [],
        totalResults: 0,
        loading: false
      });
    }
    this.props.setProgress(100);
  }

  handleprevious = async () => {
    this.setState({ page: this.state.page - 1 })
    this.updateNews();
  }
  handlenext = async () => {
    this.setState({ page: this.state.page + 1 })
    this.updateNews();
  }
  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${nextPage}&pageSize=${this.props.pageSize}`;

    this.props.setProgress(10);
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.props.setProgress(100);

      this.setState({
        page: nextPage,
        articles: this.state.articles.concat(parsedData.articles || []),
        totalResults: parsedData.totalResults || 0,
      });
    } catch (error) {
      this.props.setProgress(100);
    }
  };

  render() {
    return (
      <div className="container ">
        <h2 className="text-center mb-3 mt-3">Latest News on {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</h2>
        {this.state.loading && <Spinning />}
        {!this.state.loading && this.state.articles && this.state.articles.length > 0 && (
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={<Spinning />}
          >
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-md-4 mb-4" key={element.url}>
                  <Newsitems
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              })}
            </div>
          </InfiniteScroll>
        )}
        {!this.state.loading && (!this.state.articles || this.state.articles.length === 0) && (
          <div className="text-center">
            <p>No articles found. API Key: {this.props.apikey ? 'Present' : 'Missing'}</p>
          </div>
        )}
      </div>
    );
  }
}

export default News;