import Inferno from 'inferno'

import Icon from '../core/Icon.jsx'

const styles = {
    root: {
        padding: 24
    }
};

const ContactItem = ({ link, name }) => (
    <div style={styles.root}>
        <a href={link} target="_blank">
            <Icon src={`/images/icons/${name}.png`} height={128} width={128} />
        </a>
    </div>
);

export default ContactItem;