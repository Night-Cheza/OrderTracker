import { useState } from "react";
import OrderItem from "./OrderItem";
import OrdersFilter from "../FilterOrders/OrdersFilter";
import Card from "../UI/Card";
import "./Orders.css";

function Orders(props) {
    useState();
    const [selectedYear, setSelectedYear] = useState("2022");

    const changeYearHandler = (year) => {
        setSelectedYear(year);
    }
    //to render details of order: item, price and day-time
    return (
        <div>
            <Card className="items">
                <OrdersFilter selected={selectedYear} onYearChange = {changeYearHandler}></OrdersFilter>
                {/* to render list of elements (orders) dynamically */}
                {props.items.map((order) => (
                    <OrderItem
                        item={order.item}
                        price={order.price}
                        orderDate={order.orderDate}
                        orderTime={order.orderTime}
                    />
                ))}
            </Card>
        </div>        
    );
}

export default Orders;