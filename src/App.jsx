import Inferno from 'inferno'
import { connect } from 'inferno-redux'

import {
    createSelectTab
} from './store/ui-state'

import {
    COLOR_BG_START,
    COLOR_BG_END,
    COLOR_SHADOW,
    COLOR_TEXT
} from './utils/colors.js'

import HomePage from './home/HomePage.jsx'
import Tab from './core/tabs/Tab.jsx'
import Tabs from './core/tabs/Tabs.jsx'

const styles = {
    root: {
        alignItems: 'center',
        background: `linear-gradient(to bottom right, ${COLOR_BG_START}, ${COLOR_BG_END})`,
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        width: '100%'
    },
    content: {
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: `0px 0px 4px ${COLOR_SHADOW}`,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    title: {
        color: COLOR_TEXT
    }
};

const App = ({selectedIndex, onSelect}) => (
    <div style={styles.root}>
        <div style={styles.content} className="root-content">
            <Tabs selectedIndex={selectedIndex} onSelect={onSelect}>
                <Tab title="Home"><HomePage /></Tab>
                <Tab title="Projects"><div>PROJ</div></Tab>
                <Tab title="Contact"><div>CONT</div></Tab>
            </Tabs>
        </div>
    </div>
);

const mapStateToProps = ({uiState}) => ({
    selectedIndex: uiState.selectedTab
});

const mapDispatchToProps = (dispatch) => ({
    onSelect: (id) => {
        dispatch(createSelectTab(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
