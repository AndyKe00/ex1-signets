import './Entete.scss';

export default function Entete(props)
{
    return(
        <header className="Entete">
            <div className="logo">Signets (Beta)</div>
            <ul className="navUtilisateur">
                <li>Andy Ke</li>
                <li>Icone avatar</li>
            </ul>
        </header>
    );
}