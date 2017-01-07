import Inferno from 'inferno'

import {
    COLOR_SHADOW,
    COLOR_TABS,
    COLOR_TEXT_IMPORTANT
} from '../utils/colors'

import Hover from '../core/Hover.jsx'

const styles = {
    root: {
        borderRadius: 4,
        boxShadow: `0px 0px 4px ${COLOR_SHADOW}`,
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        width: '100%'
    },
    image: {
        height: '100%',
        objectFit: 'cover',
        width: '100%'
    },
    contentWrapper: {
        backgroundColor: 'white',
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        padding: 8,
        position: 'absolute',
        width: 'calc(100% - 16px)'
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
    description: {
        fontSize: 'large'
    },
    sourceDefault: {
        color: COLOR_TABS,
        fontSize: 'x-large',
        textDecoration: 'none',
        textDecorationLine: 'none'
    }
};

const ProjectDetails = ({project}) => (
    <div style={styles.root}>
        {
            project.image ?
                <img style={styles.image} src={project.image} /> :
                <div />
        }
        <div style={styles.contentWrapper}>
            {
                project.url ?
                    <Hover defaultStyle={styles.nameDefault} hoverStyle={styles.hoverStyle}>
                        <a href={project.url} target="_blank">{project.name}</a>
                    </Hover> :
                    <span style={styles.nameDefault}>{project.name}</span>
            }
            <span style={styles.description}>{project.description}</span>
            {
                project.source ?
                    <Hover defaultStyle={styles.sourceDefault} hoverStyle={styles.hoverStyle}>
                        <a href={project.source} target="_blank">View Source</a>
                    </Hover> :
                    <span />
            }
        </div>
    </div>
);

export default ProjectDetails;