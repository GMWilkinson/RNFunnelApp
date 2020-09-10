import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Text,
    TouchableHighlight
} from 'react-native'

export default function CustomDrawerContent(props) {
    console.log(props.navigation)
    return (
        <DrawerContentScrollView >
            <DrawerItemList {...props} />
            <DrawerItem
                label={() => <Text 
                    style={{
                        color: '#FFF045', 
                        fontWeight: 'bold',
                        fontSize: 20}}>
                        Log Out
                    </Text>}
            />
        </DrawerContentScrollView>
    );
}