import React from 'react';
import {
    View,
    SafeAreaView,
    Button,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

import gStyles from '../styles/globalStyles';

const Landing = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={[styles.container, gStyles.container]}>
                <TouchableOpacity
                    style={[gStyles.blueButton, styles.landingButton]}
                    onPress={() =>
                        navigation.navigate('Login', { title: 'Login' })
                    }
                    underlayColor='#fff'>
                    <Text style={gStyles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[gStyles.greenButton, styles.landingButton]}
                    onPress={() =>
                        navigation.navigate('Register', { title: 'Register' })
                    }
                    underlayColor='#fff'>
                    <Text style={gStyles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: '100%'
    },
    landingButton: {
        marginHorizontal: 40,
        marginVertical: 20
    }
  });

export default Landing;