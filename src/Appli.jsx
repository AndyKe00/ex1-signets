import './Appli.scss';
import Entete from './Entete';
import ListeSignets from './ListeSignets';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete />
        <section className="contenuAppli">
          <ListeSignets />
        </section>
    </div>
  );
}
