import Inferno from 'inferno'

import {
    COLOR_TABS,
    COLOR_TEXT,
    COLOR_TEXT_IMPORTANT
} from '../../utils/colors'

const styles = {
    root: {
        backgroundColor: COLOR_TABS,
        color: COLOR_TEXT,
        display: 'flex',
        flexDirection: 'column'
    },
    tabs: {
        display: 'flex',
        height: 46
    },
    indicator: {
        backgroundColor: COLOR_TEXT_IMPORTANT,
        height: 2
    }
};

const Tabs = ({ children }) => (
    <div style={styles.root}>
        <div style={styles.tabs}>
            {children}
        </div>
        <div style={{ ...styles.indicator, width: `${100 / children.length}%` }}></div>
    </div>
);

export default Tabs;