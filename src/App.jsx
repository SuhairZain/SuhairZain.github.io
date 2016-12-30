import React, { Component } from 'react'

import {
    COLOR_BG,
    COLOR_TEXT
} from './utils/colors.js'

const styles = {
    root: {
        alignItems: 'center',
        backgroundColor: COLOR_BG,
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
        <span style={styles.title}>Hello React!</span>
    </div>
);

export default App;
