import Inferno from 'inferno'

import {
    COLOR_TEXT_IMPORTANT
} from '../utils/colors'

const styles = {
    default: {
        color: COLOR_TEXT_IMPORTANT,
        fontSize: 'xx-large'
    },
    hover: {
        textDecorationLine: 'underline',
        textDecorationStyle: 'dotted'
    }
};

const Tech = ({children}) => (
    <span
        style={styles.default}
        title={`Show my projects made in ${children}`}>
        {children}
    </span>
);

export default Tech;