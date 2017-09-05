import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div className="container">
        <Link to="/">
            <img alt="" src="http://www.pt.org.br/wp-content/themes/pt_2016/assets//images/404.jpg" />
        </Link>
    </div>
);

export default PageNotFound;
