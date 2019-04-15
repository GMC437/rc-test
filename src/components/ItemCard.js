import React, { Component } from 'react';

class ItemCard extends Component {
    render() {
        const { name, superpower, end_of_an_era} = this.props;

        return (
            <li>
                <h2>
                   Name: { name }    
                </h2>
                <span>
                    Super power: { superpower }
                    <br />
                    End of an era: { end_of_an_era }
                </span>
            </li>
        );
    }
}

export default ItemCard;