import "./NewOrder.css";
import OrderForm from "./OrderForm";

function NewOrder (props) {
    const SubmitNewOrderDataHandler = (submittedOrderData) => {
        const orderData = {
            ...submittedOrderData,
            id: Math.random().toString()
        };
        //to pass order data to App.js (child to parent) - called lifting state up
        props.onAddNewOrder(orderData);
    };

    return (
        <div className="newOrder">
            <OrderForm onSubmitNewOrderData = {SubmitNewOrderDataHandler}></OrderForm>
        </div>        
    );
}

export default NewOrder;