import React, { Component } from 'react';
import './App.css';
// import Navbar from './components/header'
import {default as UUID} from "node-uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer'
import NewsPanel from './components/newsPanel';
import AddNewFeed from './components/addNewFeed'
class App extends Component {
  state = { 
    newsData : [
      {
        id: 1,
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        addedToCart: false,
      },
      {
        id: 2,
        desc:
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        addedToCart: false,
      },
      {
        id: 3,
        desc:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      },{
        id: 5,
        desc:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      },
      // {
      //   id: 4,
      //   desc:
      //     "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      // },
    ]
   }
   handleNewFeedClick = (val) => {
    let newItem = {
      id: UUID.v4(),
      desc: val
    }
    this.setState(
      { newsData: [...this.state.newsData, newItem] }
    )
    document.getElementById("textValue").value = "";
    console.log("newsData",this.state.newsData)
  };
  render() { 
    return ( 
    <React.Fragment>
      {/* <Navbar/> */}
      <div class="container">
        <AddNewFeed onAddNewFeed = {this.handleNewFeedClick}/>
        <NewsPanel
        newsData ={this.state.newsData}
        />
        <Footer/>
      </div>
    </React.Fragment> 
    );
  }
}
 
export default App;



