import Inferno from 'inferno'

import {
    COLOR_TABS,
    COLOR_TEXT,
    COLOR_TEXT_IMPORTANT
} from '../utils/colors'

import ContactItem from './ContactItem.jsx'
import Hover from '../core/Hover.jsx'

const styles = {
    root: {
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        height: '100%',
        justifyContent: 'center',
        overflowY: 'auto'
    },
    footer: {
        alignItems: 'center',
        alignSelf: 'end',
        backgroundColor: COLOR_TABS,
        color: '#000',
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        width: '100%'
    },
    footerText: {
        fontSize: 'large',
        marginTop: 8,
        textAlign: 'center'
    },
    footerLink: {
        color: '#fff',
        textDecorationLine: 'none',
    },
    footerLinkHover: {
        textDecorationLine: 'underline',
        textDecorationStyle: 'dotted'
    }
};

const FooterLink = ({link, text}) => (
    <Hover
        defaultStyle={styles.footerLink}
        hoverStyle={styles.footerLinkHover}>
        <a href={link}>
            {text}
        </a>
    </Hover>
);

const ContactPage = ({ prop }) => (
    <div style={styles.root}>
        <ContactItem link="mailto://suhairzain11@gmail.com" name="email" />
        <ContactItem link="https://github.com/SuhairZain" name="github" />
        <ContactItem link="https://facebook.com/suharzain007" name="facebook" />
        <ContactItem link="https://plus.google.com/+SuhairZain11" name="google-plus" />
        <ContactItem link="https://twitter.com/SuhairZain" name="twitter" />
        <ContactItem link="https://linkedin.com/in/SuhairZain" name="linkedin" />
        <div style={styles.footer}>
            <span style={{ textAlign: 'center' }}>
                Email icon designed by&nbsp;
                <FooterLink
                    link="http://www.flaticon.com/authors/chanut-is-industries"
                    text="Chanut is Industries" /> from&nbsp;
                <FooterLink link="http://www.flaticon.com/" text="Flaticon" /> |
                Social media icons designed by&nbsp;
                <FooterLink
                    link="http://www.flaticon.com/authors/pixel-buddha"
                    text="Pixel Buddha" /> from&nbsp;
                <FooterLink link="http://www.flaticon.com/" text="Flaticon" />
            </span>
            <span style={styles.footerText}>
                Created in&nbsp;
                <FooterLink link="https://github.com/infernojs/inferno" text="InfernoJS" /> using&nbsp;
                <FooterLink link="https://github.com/reactjs/redux" text="Redux" />,&nbsp;
                <FooterLink link="https://github.com/infernojs/inferno-motion" text="inferno-motion" />,&nbsp;
                <FooterLink link="https://github.com/webpack/webpack" text="Webpack" /> and&nbsp;
                <FooterLink link="https://github.com/babel/babel" text="Babel" />.
                Hosted and Source code available at&nbsp;
                <FooterLink link="https://github.com/SuhairZain/SuhairZain.github.io" text="GitHub" />.
            </span>
        </div>
    </div>
);

export default ContactPage;
