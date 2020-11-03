import React, { Component } from 'react';

class newsItems extends Component {
   
    render() { 
        const {id,desc} = this.props.newsItem
        return ( 
             <li class="list-group-item" id={id}>{desc}</li>
         );
    }
}
 
export default newsItems;