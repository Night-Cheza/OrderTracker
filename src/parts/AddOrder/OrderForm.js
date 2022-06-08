import { useState } from "react";
import "./OrderForm.css";

function OrderForm (props) {
    const [newItem, setNewTitle] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newDate, setNewDate] = useState("");

    const itemHandler = (event) => {
        setNewTitle(event.target.value);
    };

    const priceHandler = (event) => {
        setNewPrice(event.target.value);
    };

    const dateHandler = (event) => {
        setNewDate(event.target.value);
    }

    const submitHandler = (event) => {
        //to prevent page reload on submit event
        event.preventDefault();

        const orderData = {
            item: newItem,
            price: newPrice,
            date: new Date(newDate)
        };
        //to pass new data to NewOrder.js
        props.onSubmitNewOrderData(orderData);
        //to clear inputs after form is submitted
        setNewTitle("");
        setNewPrice("");
        setNewDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="newOrder-controls">
                <div className="newOrder-control">
                    <label>Item</label>
                    <input type="text" value={newItem} onChange={itemHandler}/>
                </div>
                <div className="newOrder-control">
                    <label>Price</label>
                    <input type="number" value={newPrice} min="0.01" step="0.01" onChange={priceHandler}/>
                </div>
                <div className="newOrder-control">
                    <label>Date</label>
                    <input type="date" value={newDate} min="2022-01-01" max="2025-12-31" onChange={dateHandler}/>
                </div>
            </div>
            <div className="newOrder-actions">
                <button type="submit">Add Item</button>
            </div>
        </form>
    );
}

export default OrderForm;