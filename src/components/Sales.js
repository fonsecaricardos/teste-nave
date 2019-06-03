import React, { Component } from 'react';
import Highcharts from "highcharts";
import Chart from "../Chart/Chart.js";

require('highcharts/modules/map')(Highcharts);

let options = {
    title: {
        text: "Site Traffic Overview"
    },
    series: [{ allowPointSelect: true, data: null, type: "column" }],
    xAxis: {
        type: "category",
        labels: { style: { fontSize: "13px", fontFamily: "Verdana, sans-serif" } },
        categories: []
    },
    yAxis: [
        {
            min: 0,
            title: { text: "" }
        },
        {
            title: { text: "", align: "high", },
        }
    ],
    credits: false
};

class Sales extends Component {

    componentDidMount() {
        this.loadSales();
    }

    loadSales() {
        const url = "http://localhost:3004/sales";

        fetch(url).then(response => response.json()).then(data => {
            let newData = [];

            for (let i = 0; i < data.length; i++) {
                newData.push({
                    name: data[i].month,
                    x: i,
                    y: data[i].sales
                });
            }
            options.series[0].data = newData;

            this.setState({ data: newData });
        });
    }

    render() {
        return (
            <div>
                {this.state && this.state.data && (
                    <Chart
                        options={options}
                        highcharts={Highcharts}
                        ref={"chart"}
                    />
                )}
            </div>
        );
    }
}

export default Sales;