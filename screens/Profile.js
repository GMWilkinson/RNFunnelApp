import React from 'react';
import {
    Text,
    SafeAreaView
} from 'react-native';
import Header from '../components/Header';

import gStyles from '../styles/globalStyles';

const Profile = ({navigation}) => {
    return (
        <SafeAreaView style={gStyles.container}>
            <Header openDrawer={() => navigation.toggleDrawer()} />
            <Text>This is user.username's profile</Text>
        </SafeAreaView>
    )
};

export default Profile;