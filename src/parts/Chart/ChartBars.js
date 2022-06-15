import "./ChartBars.css";

function ChartBars(props) {
let barFillHeight ="0%";

//to figure out filling height of a bar
if(props.maxValue > 0) {
    barFillHeight = Math.round((props.value/props.maxValue) * 100) + "%";
};

    return (
        <div className="chartBar">
            <div className="chartBar-inner"> 
                {/* to display bars filled according to orders amount in particular month*/}
                <div className="chartBar-fill" style={{height: barFillHeight}}></div>                
            </div>
            <div className="chartBar-label">{props.label}</div>
        </div>
    );
}

export default ChartBars;