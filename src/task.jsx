import React, {Component} from "react";

class Task extends Component {
    state = {
    }
    handleShowDetail = () => {
        console.log(this.props);
        this.props.onShowDetail()
    }
    render(){
        console.log(this.props)
        return (
            <li key={this.props.id}>
                {this.props.headline}
                <button
                    onClick={ () => this.props.onShowDetail(this.props) }
                >詳細</button>
            </li>
        )
    }

}

export default Task