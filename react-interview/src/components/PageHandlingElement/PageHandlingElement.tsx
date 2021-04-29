import React from 'react';

import './PageHandlingElement.scss';

type Props = {
    pageMax: number,
    handlePage: (page: number) => void
}

const PageHandlingElement: React.FC<Props> = ({ pageMax, handlePage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= pageMax; i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="pageNumber-container">
            {pageNumbers.map(page => (
                <input type="button" value={page} onClick={() => handlePage(page)} />
            ))
            }
        </div>)
}

export default PageHandlingElement;