import React, { useEffect, useState } from 'react'
import Loading from './Loading.js';
import NewsIteam from './NewsIteam.js'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [key, setKey] = useState('876673caa2b7422fafcbe0c0c4f43e1e')


const update = async()=>{
  props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${key}&page=1&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(70);

    let parseData = await data.json();
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);

    props.setProgress(100);
}

  useEffect(() => {
    update();
  },[])





  const fetchMoreData = async () => {

    setLoading(true);
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${key}&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();

    setArticles(articles.concat(parseData.articles));
    
    setTotalResults(parseData.totalResults);
    console.log(parseData.totalResults);

    setLoading(false);

  };


  // second execute..
  return (
    <>
      <div className="text-center" style={{    marginTop: "65px"}}>

        <h1>NewsBucket - Top News! from <b>{props.category}</b></h1>
        {loading && <Loading></Loading>}
      </div>


      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}

        loader={<Loading />}
      >
        <div className='container my-4'>
          <div className="row">
            {articles.map((element) => {

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

export default News;
      

News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'business'

}

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
};
