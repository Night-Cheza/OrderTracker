import { useState } from "react";
import NewOrder from "./parts/NewOrder/NewOrder";
import Orders from "./parts/DisplayOrder/Orders";

const exampleOrder = [
  {
    id: "i1",
    item: "Pizza",
    price: 10.99,
    orderDate: new Date(2022, 3, 15, 15, 5),
  },
  {
    id: "i2",
    item: "Coca-Cola",
    price: 2.99,
    orderDate: new Date(2021, 5, 28, 10, 28),
  },
  {
    id: "i3",
    item: "Coffee",
    price: 3.99,
    orderDate: new Date(2022, 2, 14, 16, 35),
  },
  {
    id: "i4",
    item: "Extra Topping",
    price: 1.99,
    orderDate: new Date(2021, 7, 3, 12, 14),
  }
];

function App() {
  const [orders, setOrders] = useState(exampleOrder);
  
  //to update order state based on previous state (to include existing data to updated list of data)
  const addNewOrderHandler = (order) => {
    setOrders(prevOrders => {
      return [order, ...prevOrders];
    });
  };

  return (
    <div>
      <NewOrder onAddNewOrder = {addNewOrderHandler}></NewOrder>
      <Orders items={orders}></Orders>
    </div>
  )
}

export default App;