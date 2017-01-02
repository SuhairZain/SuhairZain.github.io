import Inferno from 'inferno'

import {
    COLOR_SHADOW
} from '../utils/colors'

import Tech from './Tech.jsx'

const styles = {
    root: {
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: `0px 0px 4px ${COLOR_SHADOW}`,
        display: 'flex',
        height: '75%',
        overflow: 'hidden',
        width: '80%'
    },
    image: {
        height: '100%',
        objectFit: 'cover',
        width: '35%'
    },
    rightPane: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 'large',
        height: '100%',
        lineHeight: '2.5em',
        overflowY: 'auto',
        padding: '0 24px',
        textAlign: 'justify',
        width: '65%'
    },
    hi: {
        fontSize: 'x-large',
        margin: '24px 0 0'
    },
    name: {
        fontSize: 'xx-large'
    }
};

const HomePage = () => (
    <div style={styles.root}>
        <img style={styles.image} src='/images/me.jpg' />
        <div style={styles.rightPane}>
            <span style={styles.hi}>Hi!</span>
            <span>My name is <span style={styles.name}>Suhair</span>.</span>
            <span>
                I’m a coder who fell in love with the component based functional UI of&nbsp;
                <Tech>React</Tech> and <Tech>Inferno</Tech>
                &nbsp;and uses tools like <Tech>Redux</Tech> and <Tech>Rollup</Tech>
                &nbsp;to make it easier.
                &nbsp;I also create native applications for <Tech>Android</Tech> using <Tech>Java</Tech> and
                &nbsp;<Tech>React Native</Tech>, for <Tech>BlackBerry10</Tech> using <Tech>C++</Tech>.
                &nbsp;Apart from that, I’ve also got my hands dirty with <Tech>Haskell</Tech>
                &nbsp;just because I love functional programming and <Tech>Swift</Tech>
                &nbsp;because it was fun, along with a couple of <Tech>others</Tech>.
            </span>
        </div>
    </div>
);

export default HomePage;