import React from 'react';
import Tappable from 'react-tappable';

export default class LoadEarlier extends React.Component {
    renderLoading() {
        if (this.props.isLoadingEarlier === false) {
            return (
                <p style={[styles.text, this.props.textStyle]}>
                    {this.props.label}
                </p>
            );
        }
        return (
            <div>
                <p style={[styles.text, this.props.textStyle, {
                        opacity: 0,
                    }]}>
                    {this.props.label}
                </p>
                <div>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }
    render() {
        return (
            <Tappable
                style={[styles.container, this.props.containerStyle]}
                onPress={() => {
                    if (this.props.onLoadEarlier) {
                        this.props.onLoadEarlier();
                    }
                }}
                disabled={this.props.isLoadingEarlier === true}
                accessibilityTraits="button"
                >
                <div style={[styles.wrapper, this.props.wrapperStyle]}>
                    {this.renderLoading()}
                </div>
            </Tappable>
        );
    }
}

const styles ={
    container: {
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10,
    },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b2b2b2',
        borderRadius: 15,
        height: 30,
        paddingLeft: 10,
        paddingRight: 10,
    },
    text: {
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: 12,
    }
};

LoadEarlier.defaultProps = {
    onLoadEarlier: () => {},
    isLoadingEarlier: false,
    label: 'Load earlier messages',
    containerStyle: {},
    wrapperStyle: {},
    textStyle: {},
    activityIndicatorStyle: {},
};

LoadEarlier.propTypes = {
    onLoadEarlier: React.PropTypes.func,
    isLoadingEarlier: React.PropTypes.bool,
    label: React.PropTypes.string,
    containerStyle: View.propTypes.style,
    wrapperStyle: View.propTypes.style,
    textStyle: Text.propTypes.style,
    activityIndicatorStyle: View.propTypes.style,
};
