import "./OrderItem.css"

//props.attribute - the attribute from app.js file tha we defined in array of objects
function OrderItem(props) { 
    const monthDay = props.orderDate.toLocaleString("en-US", {month: "short", day: "2-digit"});
    const year = props.orderDate.toLocaleString("en-US", {year: "numeric"});
    const time = props.orderDate.toLocaleString("en-US", {hour12: false,  hour: "2-digit", minute: "2-digit"});
    return (
        <div className="orderItem">
            <div>
                <div>{monthDay}</div>
                <div>{year}</div>
                <div>{time}</div>
            </div>
            <div className="orderItem-name">
                <h2>{props.item}</h2>
                <div className="orderItem-price">${props.price}</div>
            </div>
        </div>
    );
}

export default OrderItem;