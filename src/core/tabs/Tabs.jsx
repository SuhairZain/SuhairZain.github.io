import Inferno, { cloneVNode } from 'inferno'
import { Motion, spring } from 'inferno-motion'

import {
    COLOR_TABS,
    COLOR_TEXT_IMPORTANT
} from '../../utils/colors'

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    tabsAndIndicator: {
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

const getIndicatorStyle = (length, translation) => ({
    ...styles.indicator,
    transform: `translate(${translation}%)`,
    width: `${100 / length}%`
});

const getTranslation = (selectedIndex) => selectedIndex * 100;

const Tabs = ({ children, selectedIndex = 0, onSelect }) => (
    <div style={styles.root}>
        <div style={styles.tabsAndIndicator}>
            <div style={styles.tabs}>
                {
                    children.map((child, i) => (
                        cloneVNode(
                            child,
                            {
                                ...child.props,
                                id: i,
                                isSelected: selectedIndex === i,
                                onSelect
                            }
                        )
                    ))
                }
            </div>
            <Motion defaultStyle={{ x: 0 }} style={{ x: spring(getTranslation(selectedIndex)) }}>
                {
                    ({x}) => (
                        <div style={getIndicatorStyle(children.length, x)}></div>
                    )
                }
            </Motion>
        </div>
        {children[selectedIndex].props.children}
    </div>
);

export default Tabs;