import Chart from "../Chart/Chart";

function OrdersChart(props) {
    const chartDataPoints = [
        {label: "Jan", value: 0},
        {label: "Feb", value: 0},
        {label: "Mar", value: 0},
        {label: "Apr", value: 0},
        {label: "May", value: 0},
        {label: "Jun", value: 0},
        {label: "Jul", value: 0},
        {label: "Aug", value: 0},
        {label: "Sep", value: 0},
        {label: "Oct", value: 0},
        {label: "Nov", value: 0},
        {label: "Dec", value: 0}
    ];

    //loop through orders to get month and amount of orders
    for(const order of props.orders) {
        let count = 1;
        const orderMonth = order.orderDate.getMonth(); //starts at Jan = index 0
        chartDataPoints[orderMonth].value += count;
        count++;
    };

    return (
        <Chart dataPoints={chartDataPoints}></Chart>
    );
}

export default OrdersChart;