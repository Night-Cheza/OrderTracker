import "./OrderDate.css"

//to render date of order including time
function OrderDate (props) {
    const monthDay = props.orderDate.toLocaleString("en-US", {month: "short", day: "2-digit"});
    const year = props.orderDate.toLocaleString("en-US", {year: "numeric"});
    const time = props.orderDate.toLocaleString("en-US", {hour12: false,  hour: "2-digit", minute: "2-digit"});

    return (
        <div className="orderDate">
            <div className="orderDate-month">{monthDay}</div>
            <div className="orderDate-year">{year}</div>
            <div className="orderDate-time">{time}</div>
        </div>
    );
}

export default OrderDate;