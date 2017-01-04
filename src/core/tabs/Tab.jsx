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
        fontFamily: 'Roboto, sans-serif',
        justifyContent: 'center',
        textTransform: 'uppercase'
    }
};

const getTabStyle = (isSelected) => ({
    color: isSelected ? COLOR_TEXT : `rgba(${[...convertHexColorToDex(COLOR_TEXT), 0.7].join(',')})`,
    fontSize: '14px',
    marginTop: 1,
});

const Tab = ({ id, children, isSelected, onSelect }) => (
    <div style={styles.root} onclick={() => onSelect(id)}>
        <span style={getTabStyle(isSelected)}>
            {children}
        </span>
    </div >
);

export default Tab;