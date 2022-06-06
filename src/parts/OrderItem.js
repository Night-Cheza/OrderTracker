import OrderDate from "./OrderDate";
import Card from "./Card";
import "./OrderItem.css"

//to render what items were ordered
//props.attribute - the attribute from app.js file tha we defined in array of objects
function OrderItem(props) { 
    return (
        <Card className="orderItem">
            {/* if no content between opening and closing tag, it could be written as <OrderDate />*/}
            <OrderDate orderDate={props.orderDate}></OrderDate> 
            <div className="orderItem-name">
                <h2>{props.item}</h2>
                <div className="orderItem-price">${props.price}</div>
            </div>
        </Card>
    );
}

export default OrderItem;