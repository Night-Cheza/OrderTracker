import { useState } from "react";
import "./NewOrder.css";
import OrderForm from "./OrderForm";

function NewOrder (props) {
    const [startOrder, setStartOrder] = useState(false);

    //to submit new order
    const SubmitNewOrderDataHandler = (submittedOrderData) => {
        const orderData = {
            ...submittedOrderData,
            id: Math.random().toString()
        };
        //to pass order data to App.js (child to parent) - called lifting state up
        props.onAddNewOrder(orderData);
        setStartOrder(false);
    };

    //to show the form for new order
    const setStartOrderHandler = () => {
        setStartOrder(true);
    };

    //to cancel Order form
    const cancelOrderHandler = () => {
        setStartOrder(false);
    };

    return (
        <div className="newOrder">
            {/* to check if startOrder is false, then show a button */}
            {!startOrder && <button onClick={setStartOrderHandler}>Add New Order</button>}
            {/* check if startOrder is true to display form */}
            {startOrder && <OrderForm onSubmitNewOrderData = {SubmitNewOrderDataHandler}
                                        onCancel={cancelOrderHandler} />}
        </div>        
    );
}

export default NewOrder;