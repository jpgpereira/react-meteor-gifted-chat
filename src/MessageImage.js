import React, { Component } from 'react';

export default class MessageImage extends React.Component {
    render() {
        return (
            <div style={[styles.container, this.props.containerStyle]}>
                <img
                    style={[styles.image, this.props.imageStyle]}
                    source={{uri: this.props.currentMessage.image}}
                    />
            </div>
        );
    }
}

const styles = {
    container: {
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 13,
        margin: 3,
        resizeMode: 'cover',
    },
};

MessageImage.defaultProps = {
    currentMessage: {
        image: null,
    },
    containerStyle: {},
    imageStyle: {},
};

MessageImage.propTypes = {
    currentMessage: React.PropTypes.object,
    containerStyle: View.propTypes.style,
    imageStyle: Image.propTypes.style,
};
