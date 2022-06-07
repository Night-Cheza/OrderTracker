import OrderItem from "./OrderItem";
import Card from "../UI/Card";
import "./Orders.css";

function Orders(props) {
    //to render details of order: item, price and day-time
    return (
        <Card className="items">
            <OrderItem    
                item={props.items[0].item}
                price={props.items[0].price}
                orderDate={props.items[0].orderDate}
                orderTime={props.items[0].orderTime}>
            </OrderItem>
            <OrderItem    
                item={props.items[1].item}
                price={props.items[1].price}
                orderDate={props.items[1].orderDate}
                orderTime={props.items[1].orderTime}>
            </OrderItem>
            <OrderItem    
                item={props.items[2].item}
                price={props.items[2].price}
                orderDate={props.items[2].orderDate}
                orderTime={props.items[2].orderTime}>
            </OrderItem>
            <OrderItem
                item={props.items[3].item}
                price={props.items[3].price}
                orderDate={props.items[3].orderDate}
                orderTime={props.items[3].orderTime}>
            </OrderItem>
        </Card>
      );
}

export default Orders;