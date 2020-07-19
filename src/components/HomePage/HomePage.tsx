import React, { PureComponent } from 'react';

import './HomePage.css';

type State = {
    hoverClass: 'DeveloperHover' | 'PhotographerHover' | '';
};

class HomePage extends PureComponent<{}, State> {
    state: State = {
        hoverClass: '',
    };

    createMouseEventHandlers = (hoverClassToUpdate: State['hoverClass']) => {
        return {
            onMouseOver: () => {
                this.setState({
                    hoverClass: hoverClassToUpdate,
                });
            },
            onMouseOut: () => {
                if (this.state.hoverClass !== hoverClassToUpdate) {
                    return;
                }

                this.setState({
                    hoverClass: '',
                });
            },
        };
    };

    render() {
        const { hoverClass } = this.state;

        return (
            <div className="HomePage">
                <header>
                    <h2>
                        Hello, my name is
                        <br />
                        <span className="Enlarge">Suhair Zain</span>
                    </h2>
                </header>

                <div className="Roles">
                    <div
                        className={['Developer', hoverClass].join(' ')}
                        {...this.createMouseEventHandlers('DeveloperHover')}>
                        <div className="Role">
                            <h2 className="Enlarge">developer</h2>
                        </div>
                        <span className="Explanation">
                            A developer with over 6 years of experience
                            developing mobile apps and websites. Have run my own
                            startup and worked as a full stack and front-end
                            developer. Open to learning new languages and
                            frameworks because you never know where our next
                            favorite will come from. Looking for new
                            opportunities to learn and improve self.
                        </span>
                    </div>
                    <div
                        className={['Photographer', hoverClass].join(' ')}
                        {...this.createMouseEventHandlers('PhotographerHover')}>
                        <div className="Role">
                            <h2 className="Enlarge">photographer</h2>
                        </div>
                        <span className="Explanation">
                            Someone who cannot identify colors, but still love
                            to bring a smile to someones face by capturing a
                            tiny chunk of their lives. The title should have
                            said an amateur photographer, but hey, who’s
                            counting?
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
