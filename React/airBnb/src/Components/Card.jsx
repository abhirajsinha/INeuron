import TommyImg from "../images/Tommy.png"
import Star from "../images/Star.png"

export default function Card(props){
    // console.log(props)
    let badgeText;
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT";
    }else if(props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={TommyImg} className="card--img"/>
            <div className="card--stats">
                <img src={Star} className="card--star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span>from ${props.item.price}</span>/ Person</p>
        </div>
    )
}