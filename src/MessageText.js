import React, { Component } from 'react';
import Linkify from 'react-linkify';

export default class MessageText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={[styles[this.props.position].container, this.props.containerStyle[this.props.position]]}>
                <Linkify
                    style={[styles[this.props.position].text, this.props.textStyle[this.props.position]]}
                    >
                    {this.props.currentMessage.text}
                </Linkify>
            </div>
        );
    }
}

const textStyle = {
    fontSize: 16,
    lineHeight: 20,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
};

const styles = {
    left: {
        container: {
        },
        text: {
            color: 'black',
            ...textStyle,
        },
        link: {
            color: 'black',
            textDecorationLine: 'underline',
        },
    },
    right: {
        container: {
        },
        text: {
            color: 'white',
            ...textStyle,
        },
        link: {
            color: 'white',
            textDecorationLine: 'underline',
        },
    },
};

MessageText.contextTypes = {
    actionSheet: React.PropTypes.func,
};

MessageText.defaultProps = {
    position: 'left',
    currentMessage: {
        text: '',
    },
    containerStyle: {},
    textStyle: {},
    linkStyle: {},
};

MessageText.propTypes = {
    position: React.PropTypes.oneOf(['left', 'right']),
    currentMessage: React.PropTypes.object,
    containerStyle: React.PropTypes.shape({
        left: View.propTypes.style,
        right: View.propTypes.style,
    }),
    textStyle: React.PropTypes.shape({
        left: Text.propTypes.style,
        right: Text.propTypes.style,
    }),
    linkStyle: React.PropTypes.shape({
        left: Text.propTypes.style,
        right: Text.propTypes.style,
    }),
};
