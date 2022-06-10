import { useState } from "react";
import NewOrder from "./parts/AddOrder/NewOrder";
import Orders from "./parts/DisplayOrder/Orders";

const exampleOrder = [
  {
    id: "01",
    item: "Pizza",
    price: 10.99,
    orderDate: new Date(2022, 3, 15, 15, 5),
  },
  {
    id: "02",
    item: "Coca-Cola",
    price: 2.99,
    orderDate: new Date(2021, 5, 28, 10, 28),
  },
  {
    id: "03",
    item: "Coffee",
    price: 3.99,
    orderDate: new Date(2022, 2, 14, 16, 35),
  },
  {
    id: "04",
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