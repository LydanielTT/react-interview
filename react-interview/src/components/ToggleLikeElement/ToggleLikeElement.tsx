import React from 'react';
import { useDispatch } from 'react-redux';
import { handleLike } from '../../redux/actions/movieActions';
import './ToggleLikeElement.scss';

type Props = {
    id: string,
    handleSwitch: (e: React.ChangeEvent<HTMLInputElement>) => any
}

const ToggleLikeElement: React.FC<Props> = (props) => {
    const { id, handleSwitch } = props;

    return (
        <div className="toggle-switch">
            <input type="checkbox" className="toggle-switch-checkbox" name={`toggleSwitch-${id}`} id={`toggleSwitch-${id}`} onChange={e => handleSwitch(e)}/>
            <label className="toggle-switch-label" htmlFor={`toggleSwitch-${id}`}>
                <span className="toggle-switch-inner"></span>
                <span className="toggle-switch-switch"></span>
            </label>
        </div>
    )
}

export default ToggleLikeElement;

