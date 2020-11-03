import React, { Component } from 'react';
import NewsItems from './newsItems';

class NewsPanel extends Component {
    ULstyle = {height: '300px',overflowY: 'auto'}
    render() { 
        const {newsData} = this.props;
        return ( 
            // <NewsItems/>
            <div>
                <ul class="list-group" style={this.ULstyle}>
                {newsData.map((newsItem) => (
                    <NewsItems
                    key={newsItem.id}
                    newsItem={newsItem}
                    >
                    </NewsItems>
                   
                   
          ))}
           </ul>
            </div>
            
          
         );
    }
}
 
export default NewsPanel;