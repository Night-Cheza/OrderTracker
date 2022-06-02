import Orders from "./parts/Orders";

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
      <Orders items={orders}></Orders>
    </div>
  )
}

export default App;