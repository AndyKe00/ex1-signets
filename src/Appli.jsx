import './Appli.scss';
import Entete from './Entete';
import ListeSignets from './ListeSignets';
import BtnPlus from './BtnPlus';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete />
        <section className="contenuAppli">
          <ListeSignets />
        </section>
        <footer className="Pied2Page">
            <BtnPlus />
        </footer>
    </div>
  );
}
