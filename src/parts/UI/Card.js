//card - is some sort of element container with rounded corners and shadows and elements inside. Looking like a card.
//wrapper component
import "./Card.css"

function Card(props) {
    const classes = "card " + props.className;
    //reusable style element
    return <div className={classes}>{props.children}</div>;
}

export default Card;