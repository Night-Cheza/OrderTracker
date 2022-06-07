import OrderDate from "./OrderDate";
import Card from "../UI/Card";
import "./OrderItem.css"

//props.attribute - the attribute from app.js file tha we defined in array of objects
function OrderItem(props) { 
    let item = props.item;

    const clickHandler = () => {

    }

    //to render what items were ordered
    return (
        <Card className="orderItem">
            {/* if no content between opening and closing tag, it could be written as <OrderDate />*/}
            <OrderDate orderDate={props.orderDate}></OrderDate> 
            <div className="orderItem-name">
                <h2>{item}</h2>
                <div className="orderItem-price">${props.price}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default OrderItem;