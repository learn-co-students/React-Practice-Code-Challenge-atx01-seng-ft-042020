import React, { Component } from 'react'

class Wallet extends Component {
    constructor() {
        super()
        this.input = React.createRef()
    }
    
    render() {
        return (
            <div className="wallet">
            <form onSubmit={event => this.props.addMoney(event, this.input.current.value)}>
                <label>
                Add Money:
                <input type="text" defaultValue="0" ref={this.input} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
}

export default Wallet