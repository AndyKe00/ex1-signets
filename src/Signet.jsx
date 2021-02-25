import './Signet.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FilterListIcon from '@material-ui/icons/FilterList';

export default function Signet(props)
{
    return(
        <li className="signet">
            <div className="filtre">
            <FilterListIcon  style={{ fontSize: 40 }} />
            </div>
            <img src ={'images-signets/' + props.id + '.png'} alt={props.nom}/>
            <div className="infos">
                <p className="nom">{props.nom}</p>
                <p className="date">{props.date}</p>
                <p><MoreVertIcon /></p>
            </div>
        </li>
    );
}