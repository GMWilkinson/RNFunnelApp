import React from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import { useIsDrawerOpen } from '@react-navigation/drawer';

const Header = ({openDrawer}) => {
    const isDrawerOpen = useIsDrawerOpen();

    const toggleMenu = () => {
        openDrawer()
    }

    return (
        <View style={styles.header}>
            <TouchableHighlight 
                onPress={() => toggleMenu()}
            >
                <View style={!isDrawerOpen ? styles.burgerIcon : styles.burgerIconOpen}>
                    <View style={styles.burger}></View>
                    <View style={styles.burger}></View>
                    <View style={styles.burger}></View>
                </View>
            </TouchableHighlight>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        marginBottom: 10,
        justifyContent: 'center',
        // backgroundColor: '#63B8FC'
    },
    headerButton: {
        color: '#000',
        paddingHorizontal: 10
    },
    burgerIcon: {
        padding: 10
    },
    burgerIconOpen: {
        padding: 10,
        opacity: 0.2
    },
    burger: {
        width: 30,
        height: 3,
        backgroundColor: '#63B8FC',
        marginVertical: 3
      }
})

export default Header;