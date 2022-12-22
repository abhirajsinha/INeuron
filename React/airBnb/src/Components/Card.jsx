import TommyImg from "../images/Tommy.png"
import Star from "../images/Star.png"

export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            <img src={TommyImg} className="card--img"/>
            <div className="card--stats">
                <img src={Star} className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>Life Lessons with katy jafears</p>
            <p><span className="bold">From ${props.price}</span>/ Person</p>
        </div>
    )
}