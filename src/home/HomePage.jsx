import Inferno from 'inferno'

import Tech from './Tech.jsx'

const styles = {
    root: {
        display: 'flex',
        height: 'calc(100% - 48px)',
        width: '100%'
    },
    image: {
        objectFit: 'cover'
    },
    rightPane: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 'large',
        lineHeight: '2.5em',
        overflowY: 'auto',
        textAlign: 'justify'
    },
    hi: {
        fontSize: 'x-large',
        margin: '24px 24px 0'
    },
    name: {
        fontSize: 'xx-large',
        margin: '0px 24px'
    },
    text: {
        margin: '0px 24px'
    }
};

const HomePage = () => (
    <div style={styles.root} className="home-root">
        <div className="home-image-wrapper">
            <img style={styles.image} className="home-image" src='/images/me.jpg' />
        </div>
        <div style={styles.rightPane} className="home-text">
            <span style={styles.hi}>Hi there!</span>
            <span style={styles.text}>I’m <span style={styles.name}>Suhair</span>,</span>
            <span style={styles.text}>
                a coder who fell in love with the component based declarative UI of&nbsp;
                <Tech>React</Tech> and <Tech>Inferno</Tech>
                &nbsp;and uses tools like <Tech>Redux</Tech> and <Tech>Rollup</Tech>
                &nbsp;to make it even better.
                &nbsp;I also create native applications for <Tech>Android</Tech> using <Tech>Java</Tech> and
                &nbsp;<Tech>React Native</Tech>, and for <Tech>BlackBerry10</Tech> using <Tech>C++</Tech>.
                &nbsp;Apart from that, I’ve also gotten my hands dirty with <Tech>Haskell</Tech>
                &nbsp;just because I love functional programming and <Tech>Swift</Tech>
                &nbsp;because it was fun, along with a couple of <Tech>other stuff</Tech>.
            </span>
        </div>
    </div>
);

export default HomePage;