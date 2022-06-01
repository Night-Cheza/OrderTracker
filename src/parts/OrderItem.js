import "./OrderItem.css"

function OrderItem() {
    return (
        <div className="orderItem">
            <div>April 15 2022, 15:08</div>
            <div className="orderItem-name">
                <h2>Pizza</h2>
                <div className="orderItem-price">$10.99</div>
            </div>
        </div>
    );
}

export default OrderItem;