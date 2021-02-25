import './ListeSignets.scss';
import Signet from './Signet';
import tabSignets from './data/produits.json';

export default function ListeSignets(props)
{
    return(
        <div className="listeSignets">
            <ul className="signets">
                {
                    tabSignets.map(s => <Signet id={s.id} nom={s.nom} date={s.date} />)
                }
            </ul>
        </div>
    )
}