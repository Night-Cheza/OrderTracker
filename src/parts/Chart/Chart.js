import ChartBars from "./ChartBars";
import "./Chart.css";

function Chart(props) {
    return (
        <div className="chart">
            {/* dynamically displaying chart bars; map() is for rendering an array */}
            {props.dataPoints.map(dataPoint => 
                //label is unique for each bar, we can use it as a value for key
                <ChartBars key={dataPoint.label} value={dataPoint.value} maxValue={null} label={dataPoint.label}/>)}
        </div>
    );
}

export default Chart;