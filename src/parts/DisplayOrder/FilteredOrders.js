import OrderItem from "./OrderItem";
import "./FilteredOrders.css";

function FilteredOrders (props) {
    if(props.items.length === 0) {
        return <h2 className="noOrders">No orders found</h2>;
    }

    // to render list of elements (orders) dynamically
    return (
        <ul className="ordersList">
            {props.items.map((order) => (                    
                <OrderItem
                    //to help identify unique values in a list of items
                    key={order.id}

                    item={order.item}
                    price={order.price}
                    orderDate={order.orderDate}
                />
            ))}
        </ul>
    );
}

export default FilteredOrders;