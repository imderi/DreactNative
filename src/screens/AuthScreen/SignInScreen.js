import React from 'react';
import { SafeAreaView, View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const SignInScreen = ({ navigation: { goBack } }) => {
    return (
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={styles.content}
            >
                <Text>Sign In</Text>
                <Text>Welcome</Text>
                <View>
                    <TextInput label="Email Address" mode="outlined" />
                    <TextInput label="Password" mode="outlined" />
                    <Button mode="contained" onPress={() => goBack()}>Sign In</Button>
                    <Text>Haven't registered yet? SIGN UP</Text>
                    <Text>Forgot Password?</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 30,
        justifyContent: "space-between"
    }
})
export default SignInScreen
