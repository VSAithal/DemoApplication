import React, { Component } from 'react';

class AddNewFeed extends Component {
    render() { 
        const {onAddNewFeed} = this.props
        return ( 
            <div>
                <form>
                    <div class="form-group">
                        <label for="newFeed">Add New Feed:</label>
                        <textarea class="form-control" rows="4" id="newFeed" id="textValue"></textarea>
                        <button type="button" class="btn btn-primary pull-right"  onClick={() => onAddNewFeed(document.getElementById("textValue").value)}>Submit</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default AddNewFeed;