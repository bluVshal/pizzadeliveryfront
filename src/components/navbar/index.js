import React from 'react';

const Nunavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="http://google.com">NU|PIZZA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="http://google.com">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://google.com/">Cart</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nunavbar;
