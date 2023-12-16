import { Card, LineChart, Title } from "@tremor/react";
import React from 'react';
import { useAppSelector } from "../../hooks/store";

const chartdata = [
    {
        year: 1,
        "Export Growth Rate": 1
    }

];

const LineChartComponent = (): JSX.Element => {

    const users = useAppSelector((state) => state.users);

    chartdata.push({
        year: chartdata.length + 1,
        "Export Growth Rate": users.length
    })


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