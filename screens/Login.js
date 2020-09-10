import React, { Component } from 'react';
import { 
    TextInput,
    View,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';

import gStyles from '../styles/globalStyles';

const Login = ({navigation}) => {
    const [email, onChangeEmail] = React.useState();
    const [password, onChangePassword] = React.useState();

    const handleLogin = () => {
        console.log('Login')
        navigation.navigate('Menu', { title: 'Menu' })
    }

    return (
        <View style={[styles.loginContainer, gStyles.container]}>
            <View style={styles.inputContainer}>
                <Text>Email</Text>
                <TextInput
                    style={gStyles.input}
                    keyboardType={'email-address'}
                    autoCompleteType="email"
                    placeholder=" Email..."
                    onChangeText={text => onChangeEmail(text)}
                    value={email}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Password</Text>
                <TextInput
                    style={gStyles.input}
                    secureTextEntry={true}
                    textContentType="password"
                    placeholder=" Password..."
                    onChangeText={text => onChangePassword(text)}
                    value={password}
                />
            </View>
            <TouchableOpacity
                style={[styles.button, gStyles.blueButton]}
                onPress={handleLogin}
                underlayColor='#fff'>
                <Text style={gStyles.buttonText}>LETS GO!</Text>
            </TouchableOpacity>
            <Button
                onPress={() =>
                    navigation.navigate('Register', { title: 'Register' })
                }
                title="Don't have an account? Click here"
                color="#841584"
                />
        </View>
    );
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: "center"
    },
    inputContainer: {
        margin: 10
    },
    button:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
      }
})

export default Login;