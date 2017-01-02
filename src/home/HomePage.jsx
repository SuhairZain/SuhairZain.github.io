import React, { Component } from 'react'

const styles = {
    root: {
        backgroundColor: 'white',
        borderRadius: 4,
        display: 'flex',
        height: '70%',
        overflow: 'hidden',
        width: '80%'
    },
    image: {
        height: '100%',
        marginRight: 24,
        objectFit: 'cover',
        width: '40%'
    },
    rightPane: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        width: '60%'
    },
    title: {

    },
    tech: {
        cursor: 'pointer',
        fontSize: '22pt',
        textTransform: 'capitalize'
    }
};


const types = [
    'React', 'Native', 'React Native', 'A bunch of others'
];

const HomePage = () => (
    <div style={styles.root}>
        <img style={styles.image} src='/images/me.jpg' />
        <div style={styles.rightPane}>
            <span style={styles.title}>Developes in</span>
            {
                types.map((type) => (
                    <span style={styles.tech}>{type}</span>
                ))
            }
        </div>
    </div>
);

export default HomePage;