import Inferno, { cloneVNode } from 'inferno'

import {
    COLOR_TABS,
    COLOR_TEXT_IMPORTANT
} from '../../utils/colors'

const styles = {
    root: {
        backgroundColor: COLOR_TABS,
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

const getIndicatorStyle = (length, selectedIndex) => ({
    ...styles.indicator,
    transform: `translate(${selectedIndex * 100}%)`,
    width: `${100 / length}%`
});

const Tabs = ({ children, selectedIndex = 0 }) => (
    <div style={styles.root}>
        <div style={styles.tabs}>
            {
                children.map((child, i) => (
                    cloneVNode(
                        child,
                        {
                            ...child.props,
                            isSelected: selectedIndex === i
                        }
                    )
                ))
            }
        </div>
        <div style={getIndicatorStyle(children.length, selectedIndex)}></div>
    </div>
);

export default Tabs;