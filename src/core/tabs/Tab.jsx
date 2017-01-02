import Inferno from 'inferno'

const styles = {
    root: {
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
        flexBasis: '100%',
        justifyContent: 'center',
        textTransform: 'uppercase'
    }
};

const Tab = ({ children, isSelected }) => (
    <div style={styles.root}>
        <span style={{ marginTop: 1 }}>{children}</span>
    </div>
);

export default Tab;