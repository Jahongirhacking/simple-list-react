import React, {Component} from "react";
import {Navbar} from "./components/Navbar";
import {Main} from "./components/Main";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: "burger",
                    quantity: 0,
                    objID: 0
                },
                {
                    name: "sandwich",
                    quantity: 0,
                    objID: 1
                },
                {
                    name: "cheese",
                    quantity: 0,
                    objID: 2
                },
                {
                    name: "berry",
                    quantity: 0,
                    objID: 3
                },
                {
                    name: "plum",
                    quantity: 0,
                    objID: 4
                },
                {
                    name: "melon",
                    quantity: 0,
                    objID: 5
                },
                {
                    name: "sausage",
                    quantity: 0,
                    objID: 6
                }
            ]
        }
        this.reset = this.reset.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.deleteComponent = this.deleteComponent.bind(this);
    }

    reset() {
        const updatedData = this.state.data;
        updatedData.forEach((el) => el.quantity = 0);
        this.setState({data: updatedData});
    }

    increase(id) {
        const updatedData = this.state.data;
        updatedData.forEach(el => {
            if(el.objID === id) el.quantity += 1;
        });
        this.setState({data: updatedData});
    }

    decrease(id) {
        const updatedData = this.state.data;
        updatedData.forEach(el => {
            if(el.objID === id) el.quantity -= 1;
        });
        this.setState({data: updatedData});
    }

    deleteComponent(id) {
        const updatedData = this.state.data.filter(el => el.objID !== id);
        this.setState({data: updatedData});
    }

    render() {
        return(
            <>
                <Navbar>Simple List</Navbar>
                <Main
                    data = {this.state.data}
                    reset = {this.reset}
                    increase = {this.increase}
                    decrease = {this.decrease}
                    deleteComponent = {this.deleteComponent}
                />
            </>
        )
    }
}

export default App;