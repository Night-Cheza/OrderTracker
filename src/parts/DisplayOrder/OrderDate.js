import "./OrderDate.css";

function OrderDate (props) {
    const month = props.orderDate?.toLocaleString("en-US", {month: "short"});
    const day = props.orderDate?.toLocaleString("en-US", {day: "2-digit"});
    const year = props.orderDate?.getFullYear();
    // const time = props.orderDate.toLocaleString("en-US", {hour12: false,  hour: "2-digit", minute: "2-digit"});

    //to render date of order including time
    return (
        <div className="orderDate">
            <div className="orderDate-month">{month}</div>
            <div className="orderDate-day">{day}</div>
            <div className="orderDate-year">{year}</div>
        </div>
    );
}

export default OrderDate;