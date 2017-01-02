import React, { Component } from 'react'

import {
    COLOR_BG_START,
    COLOR_BG_END,
    COLOR_TEXT
} from './utils/colors.js'

import HomePage from './home/HomePage.jsx'

const styles = {
    root: {
        alignItems: 'center',
        background: `linear-gradient(to bottom right, ${COLOR_BG_START}, ${COLOR_BG_END})`,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        width: '100%'
    },
    title: {
        color: COLOR_TEXT
    }
};

const App = () => (
    <div style={styles.root}>
        <HomePage />
    </div>
);

export default App;
