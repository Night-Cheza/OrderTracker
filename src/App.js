import OrderItem from "./parts/OrderItem";

function App() {
  const orders = [
    {
      item: "Pizza",
      price: 10.99,
      orderDate: new Date(2022, 3, 15, 15, 5),
    },
    {
      item: "Coca-Cola",
      price: 2.99,
      orderDate: new Date(2021, 5, 28, 10, 28),
    },
    {
      item: "Coffee",
      price: 3.99,
      orderDate: new Date(2022, 2, 14, 16, 35),
    },
    {
      item: "Extra Topping",
      price: 1.99,
      orderDate: new Date(2021, 7, 3, 12, 14),
    }
  ];

  return (
    <div>
      <h2>Starting react app</h2>
      <OrderItem

        item={orders[0].item}
        price={orders[0].price}
        orderDate={orders[0].orderDate}
        orderTime={orders[0].orderTime}></OrderItem>
      <OrderItem

        item={orders[1].item}
        price={orders[1].price}
        orderDate={orders[1].orderDate}
        orderTime={orders[0].orderTime}></OrderItem>
      <OrderItem

        item={orders[2].item}
        price={orders[2].price}
        orderDate={orders[2].orderDate}
        orderTime={orders[0].orderTime}></OrderItem>
      <OrderItem

        item={orders[3].item}
        price={orders[3].price}
        orderDate={orders[3].orderDate}
        orderTime={orders[0].orderTime}></OrderItem>
    </div>
  );
}

export default App;