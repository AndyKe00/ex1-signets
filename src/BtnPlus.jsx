import './BtnPlus.scss';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function BtnPlus(props)
{
    return(
        <div className="BtnPlus">
            <AddCircleIcon style={{ fontSize: 100}} />
        </div>
    );
}