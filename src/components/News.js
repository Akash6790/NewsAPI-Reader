import React, { Component } from 'react';
import Newsitems from './Newsitems';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinning from './loading'
import PropTypes from 'prop-types';

export class News extends Component {

  static defaultProps = {
      country: 'in',
      pageSize: 8,
      category: 'general'
    }
    static propTypes ={
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    }
  constructor(props) {
    super(props);
    console.log("this is from newitems consturctor")
    this.state = {
      articles: [],
      loading: true,
      page: 1
    };
    const capitalizedCategory = this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1);
  document.title = `${capitalizedCategory} - NewsApp`;
  }
  async componentDidMount() {
    console.log("kash");
    //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dec6391d925b4696b003190c69a3ef7c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //  this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedata = await data.json()
    // console.log(parsedata)
    // this.setState({ 
    //   articles: parsedata.articles ,
    //   totalResults: parsedata.totalResults,
    //   loading:false
    // })
    this.updateNews();
  }
 updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dec6391d925b4696b003190c69a3ef7c&page=${this.state.page }&pageSize=${this.props.pageSize}`;
       this.setState({loading:true})
      let data = await fetch(url);
      let parsedata = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parsedata.articles,
        totalResults: parsedata.totalResults ,
        loading:false
      });
    }

  handleprevious = async () => {
    console.log("Previous clicked");
    // if (this.state.page > 1) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dec6391d925b4696b003190c69a3ef7c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //    this.setState({loading:true})
    //   let data = await fetch(url);
    //   let parsedata = await data.json();
    //   this.setState({
    //     page: this.state.page - 1,
    //     articles: parsedata.articles,
    //     totalResults: parsedata.totalResults ,
    //     loading:false
    //   });
    // }
    this.setState({page: this.state.page - 1})
    this.updateNews();
  }
  handlenext = async () => {
    console.log("Next clicked");
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    // }
    // else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dec6391d925b4696b003190c69a3ef7c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //    this.setState({loading:true});
    //   let data = await fetch(url);
    //   let parsedata = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedata.articles,
    //     totalResults: parsedata.totalResults,
    //     loading:false
    //   });
    // }
    this.setState({page: this.state.page +1})
    this.updateNews();
  }

  render() {
    console.log("huuu")
    return (
      <div className="container ">
        <h2 className="text-center mb-3 mt-3">Latest News on {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</h2>
        {this.state.loading&&<Spinning/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4 mb-4" key={element.url}>
              <Newsitems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
        <div className="contain d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark me-3" onClick={this.handleprevious}>&larr; Previous</button>
          <button  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handlenext}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
