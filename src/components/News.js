import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

 class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8, 
        category: 'general',
      }

      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number, 
        category: PropTypes.string,
      }


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async updateNews() {
        let url = `https:newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a0bdad3e83954afcb45bf82f6df453b3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData); 
        this.setState({articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })

    }

    async componentDidMount() {
        this.updateNews();
    }



    handlePrevClick = async ()=>{
        this.setState({page: this.state.page -1});
        this.updateNews();
        
            }
            
             handleNextClick = async ()=>{
                this.setState({page: this.state.page +1});
                this.updateNews();
            }

    render() {
        return (
            <div className="container">
                <h2>NewsWeeb- Top Headlines</h2>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {this.state.articles.map((element) => {
                        return( <div className="col-md-3"  key={element.url}>
                            <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>)
                    })}
                    </div> 
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>

        )
    }
}

export default News









// import React, { Component } from 'react'
// import NewsItem from './NewsItem'

// export class News extends Component {

//     constructor(){
//         super();
//         this.state = {
//             articles: [],
//             loading: false,
//             page:1
//         }
//     }

//     async componentDidMount(){ 
//         let url = "https:newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a0bdad3e83954afcb45bf82f6df453b3=1pageSize=20";
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         console.log(parsedData); 
//         this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
//     }

//      handlePrevClick = async ()=>{
//         console.log("Previous");
//         let url = `https:newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a0bdad3e83954afcb45bf82f6df453b3=${this.state.page - 1}&pageSize=20`;
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         console.log(parsedData);  
//         this.setState({
//             page: this.state.page - 1,
//             articles: parsedData.articles
//         })

//     }
    
//      handleNextClick = async ()=>{
//         console.log("Next"); 
//         if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

//         }
//         else{
//             let url = `https:newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a0bdad3e83954afcb45bf82f6df453b3=${this.state.page + 1}&pageSize=20`;
//             let data = await fetch(url);
//             let parsedData = await data.json()
//             console.log(parsedData);  
//             this.setState({
//                 page: this.state.page + 1,
//                 articles: parsedData.articles
//             })
//     }
//     }

//     render() { 
//         return (
//             <div className="container my-3">
//                 <h1>NewsMonkey - Top Headlines</h1> 
//                 <div className="row"> 
//                 {this.state.articles.map((element)=>{
//                     return <div className="col-md-4" key={element.url}>
//                         <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
//                     </div> 
//                 })} 
//                 </div> 
//                 <div className="container d-flex justify-content-between">
//                 <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
//                 <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default News







