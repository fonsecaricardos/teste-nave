import React, { Component } from 'react';
import "./Reports.css";

class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    loadReports() {
        const url = "http://localhost:3004/reports";

        fetch(url).then(response => response.json()).then(json => {
            this.setState({ data: json });
        });

    }

    componentDidMount() {
        this.loadReports();
    }

    render() {
        return (
            <div>
                <div><h5 className="title">Reports</h5></div>
                {this.state.data.map(report =>
                    <article key={report.id}> {/* eslint-disable-next-line */}
                        <img src={report.image} className="rounded-circle"></img>
                        <h5>{report.user}</h5>
                        <h6>{report.message}</h6>
                        <h6 className="time">{report.time}</h6>
                    </article>
                )}
            </div>
        )
    }
}

export default Reports;