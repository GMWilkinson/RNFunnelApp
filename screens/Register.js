import React, { Component } from 'react';
import { 
    TextInput,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Alert,
    Button
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import gStyles from '../styles/globalStyles';

const Register = ({navigation}) => {
    const [username, onChangeUsername] = React.useState();
    const [email, onChangeEmail] = React.useState();
    const [password, onChangePassword] = React.useState();
    const [rePassword, onChangeRePassword] = React.useState();
    const [togglePrivacyCheckBox, setTogglePrivacyCheckBox] = React.useState(false);
    const [toggleTermsCheckBox, setToggleTermsCheckBox] = React.useState(false)

    const handleRegister = () => {
        if (username && email && password && rePassword) {
            if (password !== rePassword) {
                Alert.alert('Password does not match')
            } else {
                Alert.alert('Now should register and log in')
            }
        } else {
            Alert.alert('Fill all fields')
        }
    }

    return (
        <View style={[styles.loginContainer, gStyles.container]}>
            <Button
                onPress={() =>
                    navigation.navigate('Login', { title: 'Login' })
                }
                title="Already have an account? Click here"
                color="#841584"
                />
            <View style={styles.inputContainer}>
                <Text>Name</Text>
                <TextInput
                    style={gStyles.input}
                    onChangeText={text => onChangeUsername(text)}
                    placeholder=" Name..."
                    value={username}
                />
            </View>
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
                <Text>Phone Number</Text>
                <TextInput
                    style={gStyles.input}
                    keyboardType={'phone-pad'}
                    placeholder=" Phone Number..."
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
            <View style={styles.inputContainer}>
                <Text>Re-enter Password</Text>
                <TextInput
                    style={gStyles.input}
                    secureTextEntry={true}
                    textContentType="password"
                    placeholder=" Re-enter Password..."
                    onChangeText={text => onChangeRePassword(text)}
                    value={rePassword}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Borough</Text>
                <TextInput
                    style={gStyles.input}
                    placeholder=" Borough..."
                    onChangeText={text => onChangeRePassword(text)}
                    value={rePassword}
                />
            </View>
            <View style={styles.checkBoxContainer}>
                <CheckBox
                    disabled={false}
                    value={togglePrivacyCheckBox}
                    onValueChange={(newValue) => setTogglePrivacyCheckBox(newValue)}
                />
                <Text style={styles.checkBoxText}>I agree to the privacy policy</Text>
            </View>
            <View style={styles.checkBoxContainer}>
                <CheckBox
                    disabled={false}
                    value={toggleTermsCheckBox}
                    onValueChange={(newValue) => setToggleTermsCheckBox(newValue)}
                />
                <Text style={styles.checkBoxText}>I understand that my contact details may be used to contact me regarding food pickups and updates</Text>
            </View>
            <TouchableOpacity
                style={[gStyles.greenButton, styles.button]}
                onPress={handleRegister}
                underlayColor='#fff'>
                <Text style={gStyles.buttonText}>LETS GO!</Text>
            </TouchableOpacity>
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
    checkBoxContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 10,
        alignItems: 'center'
    },
    checkBoxText: {
        marginHorizontal: 10
    },
    button: {
        marginTop: 10
    }
})

export default Register;