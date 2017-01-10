import Inferno from 'inferno'

import { connect } from 'inferno-redux'

import projects from '../../data/projects.json'

import {
    createSelectProject
} from '../store/ui-state'

import ProjectDetails from './ProjectDetails.jsx'
import ProjectItem from './ProjectItem.jsx'

const styles = {
    root: {
        display: 'flex',
        height: 'calc(100% - 48px)',
        width: '100%'
    },
    info: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '12px 0px 12px 12px'
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'auto'
    }
};

const ProjectsPage = ({ selectedProject, onSelectProject }) => (
    <div className="projects-root" style={styles.root}>
        <div className="projects-image" style={styles.info}>
            <ProjectDetails project={projects.filter(({id}) => id === selectedProject)[0]} />
        </div>
        <div className="projects-list" style={styles.list}>
            <div>
                {
                    projects.map(({id, description, keywords, license, name, source, url}) => (
                        <ProjectItem
                            key={id}
                            id={id}
                            description={description}
                            keywords={keywords}
                            license={license}
                            name={name}
                            source={source}
                            url={url}
                            onSelect={onSelectProject} />
                    ))
                }
            </div>
        </div>
    </div>
);

const mapStateToProps = ({uiState}) => ({
    selectedProject: uiState.selectedProject
});

const mapDispatchToProps = (dispatch) => ({
    onSelectProject: (id) => {
        dispatch(createSelectProject(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectsPage);