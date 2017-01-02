import Inferno from 'inferno'

import {
    COLOR_TEXT_IMPORTANT
} from '../utils/colors'

import Hover from '../core/Hover.jsx'

const styles = {
    default: {
        color: COLOR_TEXT_IMPORTANT,
        cursor: 'pointer',
        fontSize: 'xx-large'
    },
    hover: {
        textDecorationLine: 'underline',
        textDecorationStyle: 'dotted'
    }
};

const Tech = ({children}) => (
    <Hover
        defaultStyle={styles.default}
        hoverStyle={styles.hover}>
        <span
            title={`Show my projects made in ${children}`}>
            {children}
        </span>
    </Hover>
);

export default Tech;