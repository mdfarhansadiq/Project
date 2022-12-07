import React, {Component} from "react";
import './title.css';

class Title extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         title: "This is a dummy data",
         isInput: 0
      }
    }

    keyPressHandler(event) {
        if (event.key === 'Enter') {
            this.setState({
                ...this.state,
                isInput: false
            })
        }
    }

    inputChange(event) {
        this.setState({
            ...this.state,
            title: event.target.value
        })
    }

    editHandler() {
        this.setState({
            isInput: this.state.isInput = true
        })
    }

    render (){
        let output = null;
        const {title, isInput} = this.state;
        if(isInput){
            output = (
                <div className="Title">
                    <input
                        className="form-control"
                        onChange={event => this.inputChange(event)}
                        onKeyPress={event => this.keyPressHandler(event)}
                        onBlur={event => this.blurHandler(event)}
                        type="text"
                        value={this.state.title}
                    />
                </div>
            )
        }
        else{
            output = (
                <div className="d-flex Title">
                    <h1 className="display-4"> {title} </h1>
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