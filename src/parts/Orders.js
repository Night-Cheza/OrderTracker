import OrderItem from "./OrderItem";
import "./Orders.css";

function Orders(props) {
    return (
        <div className="items">
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
        </div>
      );
}

export default Orders;