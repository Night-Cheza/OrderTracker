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

    //to filter orders according to chosen year
    const filteredOrders = props.items.filter(order => {
        return order.orderDate.getFullYear().toString() === selectedYear;
    });

    //to render details of order: item, price and day
    return (
        <div>
            <Card className="items">
                <OrdersFilter selected={selectedYear} onYearChange = {changeYearHandler}></OrdersFilter>
                {/* to render list of elements (orders) dynamically */}
                {filteredOrders.length ===0 ? <p><strong>No orders found</strong></p> : filteredOrders.map((order) => (                    
                    <OrderItem
                        //to help identify unique values in a list of items
                        key={order.id}

                        item={order.item}
                        price={order.price}
                        orderDate={order.orderDate}
                    />
                ))}                    
            </Card>
        </div>        
    );
}

export default Orders;