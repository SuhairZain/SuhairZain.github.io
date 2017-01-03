import Inferno from 'inferno'

import {
    COLOR_TEXT,
    convertHexColorToDex
} from '../../utils/colors'

const styles = {
    root: {
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
        flexBasis: '100%',
        justifyContent: 'center',
        textTransform: 'uppercase'
    }
};

const getTabTextColor = (isSelected) => (
    isSelected ? COLOR_TEXT : `rgba(${[...convertHexColorToDex(COLOR_TEXT), 0.7].join(',')})`
);

const Tab = ({ children, isSelected }) => (
    <div style={styles.root}>
        <span style={{ marginTop: 1, color: getTabTextColor(isSelected) }}>
            {children}
        </span>
    </div>
);

export default Tab;