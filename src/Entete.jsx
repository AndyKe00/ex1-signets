import './Entete.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Entete(props)
{
    return(
        <header className="Entete">
            <div className="logo">Signets (Beta)</div>
            <ul className="navUtilisateur">
                <li>Andy Ke</li>
                <li><AccountCircleIcon style={{ fontSize: 30 }}/></li>
            </ul>
        </header>
    );
}