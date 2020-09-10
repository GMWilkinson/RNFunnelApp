import React from 'react';
import Home from './Home';
import Campaign from './Campaign';
import Profile from './Profile';
import Collection from './Collection';
import CustomDrawerContent from '../components/CustomDrawerContent';
import {
    Text
} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Menu = (props) => {
    return (
        <>
            <Drawer.Navigator 
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                drawerType={'slide'}
                drawerStyle={{
                    backgroundColor: '#63B8FC',
                    width: 240,
                }}
                drawerContentOptions={{
                    labelStyle: {
                        color: '#FFF045',
                        fontWeight: 'bold',
                        fontSize: 20
                    }
                }}
            >
                <Drawer.Screen 
                    name="Home" 
                    component={Home}
                />
                <Drawer.Screen name="Campaign" component={Campaign} />
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="Collection" component={Collection} />
            </Drawer.Navigator>
        </>
    )
};

export default Menu;