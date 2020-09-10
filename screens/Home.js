import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import gStyles from '../styles/globalStyles';
import Header from '../components/Header';

const Home = ({ navigation }) => {
    const [postcode, onChangePostcode] = React.useState();
    const [locationLat, setLocationLat] = React.useState();
    const [locationLong, setLocationLong] = React.useState();
    const [showDistanceBox, setShowDistanceBox] = React.useState(false);
    
    const toggleDrawer = () => {
        navigation.toggleDrawer();
    }

    const goToCollection = () => {
        navigation.navigate('Collection')
    }

    const getLocation = () => {
        Geolocation.getCurrentPosition(info => {
            console.log(info.coords.latitude, info.coords.longitude)
            setLocationLat(info.coords.latitude);
            setLocationLong(info.coords.longitude);            
        });
    }

    const searchPostCode = () => {
        console.log('get postcode latLong from back end');
        setShowDistanceBox(true)
    }

    return (
        <>
            <SafeAreaView style={[styles.container, gStyles.container]}>
                <Header openDrawer={() => toggleDrawer()} />
                <ScrollView>
                    {!showDistanceBox ?
                    <View style={styles.container}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={gStyles.input}
                                placeholder=" Postcode..."
                                onChangeText={text => onChangePostcode(text)}
                                value={postcode}
                            />
                            <TouchableHighlight onPress={() => searchPostCode()}>
                                <View style={gStyles.blueButton}>
                                <Text style={gStyles.buttonText}>Search</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <Text style={{textAlign: 'center'}}>Or</Text>
                        <View>
                            <Button
                                onPress={() => getLocation()}
                                title="From my location"
                            />
                        </View>
                    </View>
                    :
                    <View style={gStyles.textContainer}>
                        <Text style={gStyles.text1}>We have a donation box within 'distance needed' of you!</Text>
                        <Text style={gStyles.text2}>Press a marker to see more details</Text>
                    </View>
                    }
                    <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    >
                        <View>
                            <MapView
                            style={{width: '100%', height: 400}}
                            showsUserLocation={true}
                            initialRegion={{
                                latitude: 51.495290,
                                longitude: -0.050138,
                                latitudeDelta: 0.0200,
                                longitudeDelta: 0.100,
                            }}
                            >
                                {locationLat && locationLong && <Marker coordinate={{ latitude: locationLat, longitude: locationLong }} />}
                                {/* <Marker coordinate={{ latitude: 51.497654, longitude: -0.061290 }} /> */}
                            </MapView>    
                        </View>
                        <TouchableHighlight style={[gStyles.greenButton, styles.bottomButton]} onPress={() => goToCollection()}>
                            <View>
                                <Text style={gStyles.buttonText}>Are you donating more than two bags?</Text>
                            </View>
                        </TouchableHighlight>
                    </ScrollView>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-around"
    },
    inputContainer: {
        marginHorizontal: 10,
        marginTop: 10
    },
    bottomButton: {
        alignSelf: "center",
        margin: 10,
        paddingVertical: 20
    },
    input: {
        marginHorizontal: 10,
        height: 40, 
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1
    }
})

export default Home;