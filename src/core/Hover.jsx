import Inferno, { cloneVNode } from 'inferno'
import Component from 'inferno-component'

const getStyle = (isHovered, defaultStyle, hoverStyle) => ({
    ...defaultStyle,
    ...(isHovered ? hoverStyle : {})
});

class Hover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        };
    }

    onMouseOver = () => {
        this.setState({
            ...this.state,
            isHovered: true
        });
    };

    onMouseOut = () => {
        this.setState({
            ...this.state,
            isHovered: false
        });
    };

    render({ children, defaultStyle, hoverStyle }) {
        const { isHovered } = this.state;
        return (
            cloneVNode(
                children,
                {
                    style: getStyle(isHovered, defaultStyle, hoverStyle),
                    onMouseOver: this.onMouseOver,
                    onMouseOut: this.onMouseOut
                }
            )
        );
    }
}

export default Hover;