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
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const Collection = ({navigation}) => {
    const [address, onChangeAddress] = React.useState();
    const [postcode, onChangePostcode] = React.useState();
    const [pounds, onChangePounds] = React.useState(30);

    const handleSubmit = () => {
        console.log('Submit Address')
        navigation.navigate('Menu', { title: 'Menu' })
    }

    const chooseQuantity = (num) => {
        onChangePounds(num)
    }

    return (
        <SafeAreaView style={[styles.container, gStyles.container]}>
            <Header openDrawer={() => navigation.toggleDrawer()} />
            <View style={gStyles.textContainer}>
                <Text style={[gStyles.text1, styles.title]}>We can collect your donation from you!</Text>
                <Text style={gStyles.text2}>your donation will be collected by our volunteer team within the next 7-days</Text>
                <Text style={gStyles.text2}>'Borough': 'Day' 'Time' to 'Day' 'Time'</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text>Address</Text>
                <TextInput
                    style={gStyles.input}
                    onChangeText={text => onChangeAddress(text)}
                    value={address}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Postcode</Text>
                <TextInput
                    style={gStyles.input}
                    onChangeText={text => onChangePostcode(text)}
                    value={postcode}
                />
            </View>
            <View>
                <Text style={styles.bagText}>How many bags?</Text>
                <View style={styles.bagBox}>
                    <TouchableOpacity style={styles.bag} onPress={() => chooseQuantity(15)}>
                        <Text style={styles.bagNumber}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bag} onPress={() => chooseQuantity(30)}>
                        <Text style={styles.bagNumber}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bag} onPress={() => chooseQuantity(45)}>
                        <Text style={styles.bagNumber}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bag} onPress={() => chooseQuantity(60)}>
                        <Text style={styles.bagNumber}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bag} onPress={() => chooseQuantity(75)}>
                        <Text style={styles.bagNumber}>5</Text>
                    </TouchableOpacity>
                    <Text style={styles.bagText}>{pounds}lbs</Text>
                </View>
            </View>
            <TouchableOpacity
                style={[styles.button, gStyles.greenButton]}
                onPress={handleSubmit}
                underlayColor='#fff'>
                <Text style={gStyles.buttonText}>SEE YOU SOON!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around"
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
    },
    title: {
        paddingBottom: 10
    },
    bagText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20
    },
    bagBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginBottom: 20
    },
    bag: {
        backgroundColor: 'black',
        justifyContent: 'center',
        height: 25,
        width: 25,
        marginLeft: 10,
        marginTop: 5
    },
    bagNumber: {
        color: 'white',
        textAlign: 'center'
    },
    chosenBag: {
        backgroundColor: 'white',
    }
})

export default Collection;