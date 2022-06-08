import "./OrdersFilter.css";

function OrdersFilter (props) {
    // const [year, setYear] = useState();

    const yearChangeHandler = (event) => {
        props.onYearChange(event.target.value);       
    };

    return (
      <div className='ordersFilter'>
        <div className='ordersFilter-control'>
          <label>Filter by year</label>
          <select value={props.selected} onChange={yearChangeHandler}>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default OrdersFilter;
