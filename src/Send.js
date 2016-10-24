import React, { Component } from 'react';
import Tappable from 'react-tappable';

export default class Send extends React.Component {
    render() {
        if (this.props.text.trim().length > 0) {
            return (
                <Tappable
                    style={[styles.container, this.props.containerStyle]}
                    onPress={() => {
                        this.props.onSend({text: this.props.text.trim()}, true);
                    }}
                    accessibilityTraits="button"
                    >
                    <p style={[styles.text, this.props.textStyle]}>{this.props.label}</p>
                </Tappable>
            );
        }
        return <View/>;
    }
}

const styles = {
    container: {
        height: 44,
        justifyContent: 'flex-end',
    },
    text: {
        color: '#0084ff',
        fontWeight: '600',
        fontSize: 17,
        backgroundColor: 'transparent',
        marginBottom: 12,
        marginLeft: 10,
        marginRight: 10,
    },
};

Send.defaultProps = {
    text: '',
    onSend: () => {},
    label: 'Send',
    containerStyle: {},
    textStyle: {},
};

Send.propTypes = {
    text: React.PropTypes.string,
    onSend: React.PropTypes.func,
    label: React.PropTypes.string,
    containerStyle: View.propTypes.style,
    textStyle: Text.propTypes.style,
};
