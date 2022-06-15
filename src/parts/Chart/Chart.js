import ChartBars from "./ChartBars";
import "./Chart.css";

function Chart(props) {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const maximum = Math.max(...dataPointValue);

    return (
        <div className="chart">
            {/* dynamically displaying chart bars; map() is for rendering an array */}
            {props.dataPoints.map(dataPoint => 
                //label is unique for each bar, we can use it as a value for key
                <ChartBars key={dataPoint.label} value={dataPoint.value} maxValue={maximum} label={dataPoint.label}/>)}
        </div>
    );
}

export default Chart;