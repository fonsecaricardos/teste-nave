import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEye, faUsers, faDollarSign, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Information.css';

library.add(
    fab,
    faEye,
    faUsers,
    faDollarSign,
    faShoppingCart
);

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    loadInformations() {
        const url = "http://localhost:3004/information";

        fetch(url)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json });
            });
    }

    componentDidMount() {
        this.loadInformations();
    }

    render() {
        const data = this.state.data;
        if (!data) return null;
        return (
            <div className="row">
                <div className="col-sm-3 visitors">
                    <FontAwesomeIcon icon="eye" className="IconVisitors" size="3x" />
                    <strong>{data.visitors}</strong>
                    <p>Visitors</p>
                </div>
                <div className="col-sm-3 users">
                    <FontAwesomeIcon icon="users" className="IconUsers" size="3x" />
                    <strong>{data.users}</strong>
                    <p>Users</p>
                </div>
                <div className="col-sm-3 sales">
                    <FontAwesomeIcon icon="dollar-sign" className="IconSales" size="3x" />
                    <strong>{data.sales}</strong>
                    <p>Sales</p>
                </div>
                <div className="col-sm-3 orders">
                    <FontAwesomeIcon icon="shopping-cart" className="IconOrders" size="3x" />
                    <strong>{data.orders}</strong>
                    <p>Orders</p>
                </div>
            </div>
        );
    }
}

export default Information;