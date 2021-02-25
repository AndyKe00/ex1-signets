import './Signet.scss';

export default function Signet(props)
{
    return(
        <li className="signet">
            <img src ={'images-signets/' + props.id + '.png'} alt={props.nom}/>
            <div className="infos">
                <p className="nom">{props.nom}</p>
                <p className="date">{props.date}</p>
            </div>
        </li>
    );
}