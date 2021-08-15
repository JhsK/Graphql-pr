import React from 'react';
import { Link } from 'react-router-dom';

const Movies = ({ id }) => {
    return (
        <div>
            <Link to={`/${id}`}>{id}</Link>
        </div>
    );
};

export default Movies;