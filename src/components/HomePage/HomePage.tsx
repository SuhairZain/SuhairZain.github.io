import React, { PureComponent } from 'react';

import './HomePage.css';

class HomePage extends PureComponent {
    render() {
        return (
            <div className="HomePage">
                <h2>
                    Hello, my name is{' '}
                    <span className="Enlarge">Suhair Zain</span>
                </h2>

                <h2 className="Roles">
                    and I'm a{' '}
                    <a className="Enlarge" href="#developer">
                        developer
                    </a>{' '}
                    and a hobbyist{' '}
                    <a className="Enlarge" href="#photographer">
                        photographer
                    </a>
                    .
                </h2>
            </div>
        );
    }
}

export default HomePage;
