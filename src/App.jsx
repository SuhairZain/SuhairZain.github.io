import Inferno from 'inferno'

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
        height: '75%',
        overflow: 'hidden',
        width: '80%'
    },
    title: {
        color: COLOR_TEXT
    }
};

const App = () => (
    <div style={styles.root}>
        <div style={styles.content}>
            <Tabs>
                <Tab>Home</Tab>
                <Tab>Projects</Tab>
                <Tab>Contact</Tab>
            </Tabs>
            <HomePage />
        </div>
    </div>
);

export default App;
