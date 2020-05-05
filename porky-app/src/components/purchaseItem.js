import React, { Component } from 'react';

class PurchaseItem extends Component {

    getClassName() {
        var className = 'PurchaseItem ';
        className = className + this.props.matured;
        return className;
    }
    render() {
        return ( 
            <div className={this.getClassName()}> PurchaseItem </div>
        )
    }
}

export default PurchaseItem;