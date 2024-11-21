import './LogementCard.scss';
import { Link } from "react-router-dom";

export default function LogementCard (props: {title: string, imageUrl: string, id: string}) {    
    return (
        <div className="logement-card-container">
            <div className="logement-card">
                <p>{props.title}</p>
                <Link to={`/logement/${props.id}`} state={{logementById: props.id}}>
                    <img src={props.imageUrl} alt={props.title} />                
                </Link>
            </div>
      </div>
    );
}