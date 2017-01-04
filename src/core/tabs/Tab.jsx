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

const getTabStyle = (isSelected) => ({
    color: isSelected ? COLOR_TEXT : `rgba(${[...convertHexColorToDex(COLOR_TEXT), 0.7].join(',')})`,
    fontWeight: isSelected ? 'bold' : 'normal',
    marginTop: 1,
});

const Tab = ({ children, isSelected }) => (
    <div style={styles.root}>
        <span style={getTabStyle(isSelected)}>
            {children}
        </span>
    </div >
);

export default Tab;