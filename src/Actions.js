import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default class Actions extends React.Component {
    constructor(props) {
        super(props);
        this.onActionsPress = this.onActionsPress.bind(this);
    }

    onActionsPress() {
        const options = Object.keys(this.props.options);
        const cancelButtonIndex = Object.keys(this.props.options).length - 1;
        this.context.actionSheet().showActionSheetWithOptions({
            options,
            cancelButtonIndex,
        },
        (buttonIndex) => {
            let i = 0;
            for (let key in this.props.options) {
                if (this.props.options.hasOwnProperty(key)) {
                    if (buttonIndex === i) {
                        this.props.options[key](this.props);
                        return;
                    }
                    i++;
                }
            }
        });
    }

    renderIcon() {
        if (this.props.icon) {
            return this.props.icon();
        }
        return (
            <div
                style={[styles.wrapper, this.props.wrapperStyle]}
                >
                <p
                    style={[styles.iconText, this.props.iconTextStyle]}
                    >
                    +
                </p>
            </div>
        );
    }

    render() {
        return (
            <Tappable
                style={[styles.container, this.props.containerStyle]}
                onPress={this.onActionsPress}
                >
                {this.renderIcon()}
            </Tappable>
        );
    }
}

Actions.contextTypes = {
    actionSheet: React.PropTypes.func,
};

Actions.defaultProps = {
    onSend: () => {},
    options: {},
    icon: null,
    containerStyle: {},
    iconTextStyle: {},
};

Actions.propTypes = {
    onSend: React.PropTypes.func,
    options: React.PropTypes.object,
    icon: React.PropTypes.func,
    containerStyle: View.propTypes.style,
    iconTextStyle: Text.propTypes.style,
};
