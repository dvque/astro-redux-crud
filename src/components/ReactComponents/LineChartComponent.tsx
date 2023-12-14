import { Card, LineChart, Title } from "@tremor/react";
import React from 'react';

const chartdata = [
    {
        year: 1970,
        "Export Growth Rate": 1
    },
    {
        year: 1971,
        "Export Growth Rate": 1.25
    },
    {
        year: 1972,
        "Export Growth Rate": 1.8
    },
    {
        year: 1973,
        "Export Growth Rate": 2
    },
    {
        year: 1974,
        "Export Growth Rate": 1.2
    }
];

const LineChartComponent = (): JSX.Element => {


    return (
        <Card className="h-full">
            <Title>Line Chart</Title>
            <LineChart
                className="mt-6"
                data={chartdata}
                index="year"
                categories={["Export Growth Rate"]}
                colors={["emerald"]}
                yAxisWidth={40}
            />
        </Card>


    );
};

export default LineChartComponent;