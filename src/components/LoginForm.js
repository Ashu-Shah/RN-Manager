import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common/index';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions/index';

class LoginForm extends Component{
    constructor() {
        super();
        this.onButtonPress = this.onButtonPress.bind(this)
    }

    onEmailChange = (text) => {
        this.props.emailChanged(text);
    };

    onPasswordChange = (text) => {
        this.props.passwordChanged(text)
    };

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password })
    };

    renderButton() {
        if(this.props.loading) {
            return(
                <Spinner size="small"/>
            )
        }
        return(
            <Button onPress={this.onButtonPress}>Login</Button>
        )
    }

    render() {
        const { email, password, error } = this.props;
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange}
                        value={email}
                        keyboardType="email-address"
                        returnKeyType="next"
                        autoCapitalize="none"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="******"
                        onChangeText={this.onPasswordChange}
                        value={password}
                        secureTextEntry
                    />
                </CardSection>

                {error.length ?
                    <View style={styles.errorContaier}>
                        <Text style={styles.errorTextStyle}>{error}</Text>
                    </View>
                    : null
                }

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    errorContaier: {
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexWrap: 'wrap'
    },
    errorTextStyle: {
        fontSize: 14,
        color: 'red',
        textAlign: 'center'
    }
});

const mapToStateProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return{
        email,
        password,
        error,
        loading
    }
};

export default connect(mapToStateProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);