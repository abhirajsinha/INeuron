import TommyImg from "../images/Tommy.png"
import Star from "../images/Star.png"

export default function Card(props){
    return(
        <div className="card">
            <img src={TommyImg} className="card--img"/>
            <div className="card--stats">
                <img src={Star} className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6) •</span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with katy jafears</p>
            <p><span className="bold">From $136</span>/ Person</p>
        </div>
    )
}