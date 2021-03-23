import React from 'react'
import { View, ScrollView } from 'react-native'
import { List, Text, Divider } from 'react-native-paper'

const SettingsScreen = () => {
    return (
        <ScrollView>
            <List.Item
                title="Profile"
                left={(props) => <List.Icon {...props} icon="account-outline" />}
            />
            <List.Item
                title="Change password"
                left={(props) => <List.Icon {...props} icon="shield-lock-outline" />}
            />
            <List.Item
                title="History"
                left={(props) => <List.Icon {...props} icon="timer-outline" />}
            />
            <List.Item
                title="Dark Mode"
                left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
            />
            <List.Item title="Log Out"
                left={(props) => <List.Icon {...props} icon="logout" />}
            />
        </ScrollView>
    )
}

export default SettingsScreen
