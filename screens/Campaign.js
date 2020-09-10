import React from 'react';
import {
    Text,
    SafeAreaView,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';

import gStyles from '../styles/globalStyles';
import Header from '../components/Header';

const Campaign = ({navigation}) => {
    return (
        <View style={[styles.container, gStyles.container]}>
            <Header openDrawer={() => navigation.toggleDrawer()} />
            <Swiper showsButtons={true} loop={false}>
                <View style={styles.slide}>
                    <Text style={styles.text}>Step One</Text>
                    <View>
                        <Text style={styles.text}>Campaign:</Text>
                        <Text style={styles.text}>Inform your neighbours about Funnel and food insecurity</Text>
                    </View>
                </View>
                <View style={styles.slide}>
                    <Text style={styles.text}>Step Two</Text>
                    <View>
                        <Text style={styles.text}>Gather:</Text>
                        <Text style={styles.text}>Gather donations from your neighbours to contribute to the Funnel</Text>
                    </View>
                </View>
                <View style={styles.slide}>
                    <Text style={styles.text}>Step Three</Text>
                    <View>
                        <Text style={styles.text}>Share:</Text>
                        <Text style={styles.text}>Share the mission with your friends, get them to stop wasting and start Funneling!</Text>
                    </View>
                </View>
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40
    },
    slide: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    text: {
        fontSize: 40,
        textAlign: 'center'
    }
})

export default Campaign;