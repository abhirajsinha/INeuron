import memeImg from "../Images/TrollFace.png";

export default function(){
    return (
        <div className="header">
            <img src={memeImg} className="header--image"></img>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--info">Get the Crazy meme's</h4>
        </div>
    )
}