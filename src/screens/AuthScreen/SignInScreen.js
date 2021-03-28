import React from 'react';
import { SafeAreaView, View, ScrollView, Text, StyleSheet, TextBase } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const SignInScreen = ({ navigation }) => {
    return (
        <ScrollView
            contentContainerStyle={styles.content}
        >
            <SafeAreaView>
                <View style={styles.header}>
                    <Text>SIGN IN</Text>
                    <Text style={styles.headerTitle}>Welcome</Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput dense={true} label="Email Address" mode="outlined" style={styles.inputContainerStyle} />
                    <TextInput dense={true} label="Password" mode="outlined" style={styles.inputContainerStyle} right={
                        <TextInput.Icon
                            name={'eye'} // name={'eye-off}
                            forceTextInputFocus={false}
                        />
                    } />
                    <Button mode="contained" onPress={() => navigation.goBack()}>SIGN IN</Button>
                </View>

                <View style={styles.row} >
                    <Text onPress={() => navigation.navigate('SignUpScreen')}>Haven't registered yet? SIGN UP</Text>
                    <Text onPress={() => navigation.navigate('ForgotPasswordScreen')}>Forgot Password?</Text>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 35,
    },
    header: {
        marginBottom: 50
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: "bold"
    },
    formContainer: {

    },
    inputContainerStyle: {
        marginBottom: 20,
    },
    row: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
    },
})
export default SignInScreen
