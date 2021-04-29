import React, { useState } from 'react';

import './SliceElement.scss';

type Props = {
    handleMoviesPerPage: (value: string) => any
}
const SliceElement: React.FC<Props> = (props) => {
    const [radio, setRadio] = useState("4");

    const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadio(e.currentTarget.value);
        props.handleMoviesPerPage(e.currentTarget.value);
    }
    return (
        <div className="slice-container">
            <input type="radio" id="4-page" value="4" checked={radio === "4"} onChange={handleRadio}/>
            <label htmlFor="4">4</label>
            <input type="radio" id="8-page" value="8" checked={radio === "8"} onChange={handleRadio}/>
            <label htmlFor="8">8</label>
            <input type="radio" id="12-page" value="12" checked={radio === "12"} onChange={handleRadio}/>
            <label htmlFor="12">12</label>
            per page
        </div>
    );
}

export default SliceElement;