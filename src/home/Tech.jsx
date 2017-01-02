import Inferno from 'inferno'

import {
    COLOR_TEXT_IMPORTANT
} from '../utils/colors'

const styles = {
    root: {
        color: COLOR_TEXT_IMPORTANT,
        cursor: 'pointer',
        fontSize: 'xx-large',
        textDecorationLine: 'underline',
        textDecorationStyle: 'dotted'
    }
};

const Tech = ({children}) => (
    <span
        title={`Show my projects made in ${children}`}
        style={styles.root}>
        {children}
    </span>
);

export default Tech;