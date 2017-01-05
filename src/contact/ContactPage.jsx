import Inferno from 'inferno'

import ContactItem from './ContactItem.jsx'

const styles = {
    root: {
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        height: '100%',
        justifyContent: 'center',
        overflowY: 'auto'

    }
};

const ContactPage = ({ prop }) => (
    <div style={styles.root}>
        <ContactItem link="mailto://suhairzain11@gmail.com" name="email" />
        <ContactItem link="https://github.com/SuhairZain" name="github" />
        <ContactItem link="https://facebook.com/suharzain007" name="facebook" />
        <ContactItem link="https://plus.google.com/+SuhairZain11" name="google-plus" />
        <ContactItem link="https://twitter.com/SuhairZain" name="twitter" />
        <ContactItem link="https://linkedin.com/in/SuhairZain" name="linkedin" />
    </div>
);

export default ContactPage;
