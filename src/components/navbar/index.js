import React from 'react';
import labels from '../../labels.json';

const Nunavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="http://google.com">{labels.appName}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="http://google.com">{labels.login}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://google.com/">{labels.cart}</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nunavbar;
