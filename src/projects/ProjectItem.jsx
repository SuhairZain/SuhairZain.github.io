import Inferno from 'inferno'

import {
    COLOR_SHADOW,
    COLOR_TEXT_IMPORTANT,
    COLOR_TEXT_SUB
} from '../utils/colors'

import Hover from '../core/Hover.jsx'

const styles = {
    root: {
        borderRadius: 4,
        boxShadow: `0px 0px 4px ${COLOR_SHADOW}`,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        margin: 12,
        padding: '12px 8px 4px'
    },
    nameAndLicense: {
        display: 'flex'
    },
    nameDefault: {
        color: COLOR_TEXT_IMPORTANT,
        fontSize: 'xx-large',
        textDecorationLine: 'none'
    },
    hoverStyle: {
        textDecorationLine: 'underline',
        textDecorationStyle: 'dotted'
    },
    licenseDefault: {
        color: 'black',
        fontSize: 'small',
        fontWeight: 'bold',
        marginLeft: 12,
        textDecorationLine: 'none'
    },
    keywords: {
        alignSelf: 'end',
        color: COLOR_TEXT_SUB,
        fontSize: 'large',
        marginTop: 8
    },
    description: {
        fontSize: 'normal'
    }
};

const name = ({ id, description, keywords, license, name, source, url, onSelect }) => (
    <div style={styles.root} onclick={() => { onSelect(id); } }>
        <div style={styles.nameAndLicense}>
            {
                url ?
                    <Hover defaultStyle={styles.nameDefault} hoverStyle={styles.hoverStyle}>
                        <a href={url} target="_blank">
                            <span title="Open the project">{name}</span>
                        </a>
                    </Hover> :
                    <span style={styles.nameDefault}>{name}</span>
            }

            {
                license ?
                    <Hover defaultStyle={styles.licenseDefault} hoverStyle={styles.hoverStyle}>
                        <a href={source} target="_blank">
                            <span title="View Source Code" style={styles.license}>{license}</span>
                        </a>
                    </Hover> :
                    <span />
            }
        </div>
        <span style={styles.description}>{description}</span>
        <span style={styles.keywords}>{keywords.join(', ')}</span>
    </div>
);

export default name;