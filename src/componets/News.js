import React, { Component } from 'react'
import Loading from './Loading.js';
import NewsIteam from './NewsIteam.js'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

  constructor(props) {
    // first execute..
    super(props);
    // must be super call
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      key:'876673caa2b7422fafcbe0c0c4f43e1e'
    }
  }



  async componentDidMount(props) {
    // console.log("before api call")
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.key}&page=1&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(70);

    let parseData = await data.json();
    // console.log(parseData);
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false });
    this.props.setProgress(100);

  }



  fetchMoreData = async () => {
    
    this.setState({
      page: this.state.page + 1,
      loading: true
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.key}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      loading: false,
      totalResults:this.state.totalResults
    });


  };

  render() {
    // second execute..
    return (
      <>
        <div className="text-center">

          <h1>NewsBucket - Top News! from <b>{this.props.category}</b></h1>
         {this.state.loading && <Loading></Loading>}
        </div>


        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}

          loader={<Loading />}
        >
          <div className='container my-4'>
            <div className="row">
              {this.state.articles.map((element) => {

                return <div className="col-md-4" key={element.url}>
                  <NewsIteam source={element.source.name} author={element.author} date={element.publishedAt} title={element.title ? element.title.slice(0, 50) : "There is no title in this news"} description={element.description ? element.description.slice(0, 88) : "there is no description on this news"} imageurl={element.urlToImage ? element.urlToImage : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/screenshot_2023-05-20_at_2.43.53_pm_0-sixteen_nine.png?VersionId=NwaNnQdy8PegTucfjzKq5krtOMktr93d"} newsurl={element.url}></NewsIteam>
                </div>

              })}

            </div>
          </div>
        </InfiniteScroll>

      </>
    )
  }
}


News.defaultProps = {
  country: 'in',
  pageSize: 9
}

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string
};
