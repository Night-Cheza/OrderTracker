import { useState } from "react";
import FilteredOrders from "./FilteredOrders";
import OrdersFilter from "../FilterOrders/OrdersFilter";
import OrdersChart from "./OrdersChart";
import Card from "../UI/Card";
import "./Orders.css";

function Orders(props) {
    useState();
    const [selectedYear, setSelectedYear] = useState("2022");

    const changeYearHandler = (year) => {
        setSelectedYear(year);
    }

    //to filter orders according to chosen year
    const filteredOrders = props.items.filter(order => {
        return order.orderDate.getFullYear().toString() === selectedYear;
    });

    //to render details of order: item, price and day
    return (
        <div>
            <Card className="items">
                <OrdersFilter selected={selectedYear} onYearChange = {changeYearHandler} />
                <OrdersChart orders={filteredOrders}/>
                <FilteredOrders items={filteredOrders} />
            </Card>
        </div>        
    );
}

export default Orders;