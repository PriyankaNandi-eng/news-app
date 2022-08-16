import React, { Component } from 'react'
import Spinner from '../Spinner';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country : 'in',
    pageSize : 9,
    category: 'general'
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category: PropTypes.string
   }
 constructor(props){
     super(props);
     this.state = {
      articles: [],
      loading: false,
      page:1
     }
    document.title = `${this.props.category} -The News Express`
  }
  // async updateNews (){
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b9e07efabfe541aca6ca2731a5dc6d67&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  // this.setState({loading:true});
  // let data = await fetch(url);
  // let parseData = await data.json()
  // this.setState({
  //   page : this.state.page - 1,
  //   articles: parseData.articles,
  //   loading:false
  // })

  // }

 async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b9e07efabfe541aca6ca2731a5dc6d67&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles: parseData.articles, totalResults: parseData.totalResults,
      loading:false})

  }
  // this.updateNews();
 

  handlePrevClick= async ()=>{
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b9e07efabfe541aca6ca2731a5dc6d67&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url);
  let parseData = await data.json()
  this.setState({
    page : this.state.page - 1,
    articles: parseData.articles,
    loading:false
  })

  // this.setState({page: this.state.page - 1});
  // this.updateNews()

}
handleNextClick= async ()=>{
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) 
    {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b9e07efabfe541aca6ca2731a5dc6d67&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({
      page : this.state.page + 1,
      articles: parseData.articles,
     loading:false
    })
  }
  // this.setState({page: this.state.page + 1});
  // this.updateNews()
}

  render() {
    return (
      <div className="container my-3">
      <h2 className='text-center' style={{margin:'40px' , marginTop:'90px'}}>The News Express - Top {this.props.category} Headlines</h2>
     {this.state.loading && <Spinner/>}
      <div className="row">
      {!this.state.loading && this.state.articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>
        <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} UrlToImage={element.urlToImage}  newsUrl={element.url} author={element.author} date={element.publishedAt}/>
        </div>
      })}
      </div> 
      <div className="container d-flex justify-content-between">
      
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" 
      onClick={this.handlePrevClick}> 
      &larr; Previous</button>

      <button type="button" className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
    </div>
    )
  }
}




export default News


