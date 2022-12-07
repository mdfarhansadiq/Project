import React, {Component} from "react";

class Title extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         title: "This is a dummy data",
         isInput: 0
      }
    }

    render (){
        let output = null;
        const {title, isInput} = this.state;
        if(isInput){

        }
        else{
            output = (
                <div className="d-flex Title">
                    <h1 className="display-4"> {this.state.title} </h1>
                    <span onClick={() => this.editHandler()} className="ml-auto edit-icon">
                        <i className="fas fa-pencil-alt"></i>
                    </span>
                </div>
            )
        }
        return (
            <div>
                {output}
            </div>
        )
    }
}


export default Title;