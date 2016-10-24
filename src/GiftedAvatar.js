import React, { Component } from 'react';
import Tappable from 'react-tappable';

export default class GiftedAvatar extends React.Component {
    setAvatarColor() {
        const userName = this.props.user.name || '';
        const name = userName.toUpperCase().split(' ');
        if (name.length === 1) {
            this.avatarName = `${name[0].charAt(0)}`;
        } else if (name.length > 1) {
            this.avatarName = `${name[0].charAt(0)}${name[1].charAt(0)}`;
        } else {
            this.avatarName = '';
        }

        let sumChars = 0;
        for(let i = 0; i < userName.length; i++) {
            sumChars += userName.charCodeAt(i);
        }

        // inspired by https://github.com/wbinnssmith/react-user-avatar
        // colors from https://flatuicolors.com/
        const colors = [
            '#e67e22', // carrot
            '#2ecc71', // emerald
            '#3498db', // peter river
            '#8e44ad', // wisteria
            '#e74c3c', // alizarin
            '#1abc9c', // turquoise
            '#2c3e50', // midnight blue
        ];

        this.avatarColor = colors[sumChars % colors.length];
    }

    renderAvatar() {
        if (typeof this.props.user.avatar === 'function') {
            return this.props.user.avatar();
        } else if (typeof this.props.user.avatar === 'string') {
            return (
                <img
                source={{uri: this.props.user.avatar}}
                style={[defaultStyles.avatarStyle, this.props.avatarStyle]}
                />
        );
    }
    return null;
}

renderInitials() {
    return (
        <p style={[defaultStyles.textStyle, this.props.textStyle]}>
            {this.avatarName}
        </p>
    );
}

render() {
    if (!this.props.user.name && !this.props.user.avatar) {
        // render placeholder
        return (
            <div
                style={[
                    defaultStyles.avatarStyle,
                    {backgroundColor: 'transparent'},
                    this.props.avatarStyle,
                ]}
                accessibilityTraits="image"
                />
        )
    }
    if (this.props.user.avatar) {
        return (
            <Tappable
                disabled={this.props.onPress ? false : true}
                onPress={() => {
                    const {onPress, ...other} = this.props;
                    this.props.onPress && this.props.onPress(other);
                }}
                accessibilityTraits="image"
                >
                {this.renderAvatar()}
            </Tappable>
        );
    }

    if (!this.avatarColor) {
        this.setAvatarColor();
    }

    return (
        <Tappable
            disabled={this.props.onPress ? false : true}
            onPress={() => {
                const {onPress, ...other} = this.props;
                this.props.onPress && this.props.onPress(other);
            }}
            style={[
                defaultStyles.avatarStyle,
                {backgroundColor: this.avatarColor},
                this.props.avatarStyle,
            ]}
            accessibilityTraits="image"
            >
            {this.renderInitials()}
        </Tappable>
    );
}
}

const defaultStyles = {
    avatarStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    textStyle: {
        color: '#fff',
        fontSize: 16,
        backgroundColor: 'transparent',
        fontWeight: '100',
    },
};

GiftedAvatar.defaultProps = {
    user: {
        name: null,
        avatar: null,
    },
    onPress: null,
    avatarStyle: {},
    textStyle: {},
};

GiftedAvatar.propTypes = {
    user: React.PropTypes.object,
    onPress: React.PropTypes.func,
    avatarStyle: Image.propTypes.style,
    textStyle: Text.propTypes.style,
};
