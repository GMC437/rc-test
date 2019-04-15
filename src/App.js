import React, { Component } from 'react';
import axios from 'axios';
import ItemCard from './components/ItemCard'
import './App.css';

// let name = "Peter B. Parker"
let greekUrl = "http://athena-7.herokuapp.com/ancients.json";

// add an input and button to dynamically search
// Search: http://athena-7.herokuapp.com/ancients.json?search={inputString}

function badResponse() {
    // debugger
    axios.get(greekUrl + '?error=true').then( function (res) {
        // debugger
        this.setState(
            { errorMes: res.message }
        )
    }).catch(function (err){
            // handle error
            // debugger
            // this.setState({ errorMes: err.response.data.error })
        });
}

class App extends Component {

    state = {
        gods: [],
        errorMes: ""
    }

    componentDidMount() {
        axios.get(greekUrl).then(res => {
            this.setState({ gods: res.data })
        });
    }

    render() {
        // debugger
        const { gods, errorMes } = this.state;
        const godsItems = gods.map((god, i) => (<ItemCard key={i} name={god.name} superpower={god.superpower} end_of_an_era={god.end_of_an_era} />));
        return (
            <div className="App">
                {/* <Container url={greekUrl} ></Container> */}
                <h1> Greek Gods </h1>
                <button type="button" onClick={badResponse()} >ERROR</button>
                {
                    errorMes ? (<div>
                        {errorMes}
                    </div>) : undefined
                }

                <ul>
                    {godsItems}
                </ul>
            </div>
        );
    }
}

export default App;
