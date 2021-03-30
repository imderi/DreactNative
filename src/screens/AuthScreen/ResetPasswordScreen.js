import React from 'react';
import { SafeAreaView, View, ScrollView, Text, StyleSheet, TextBase } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const ForgotPasswordScreen = ({ navigation }) => {
    return (
        <ScrollView
            contentContainerStyle={styles.content}
        >
            <SafeAreaView>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>RESET PASSWORD</Text>
                    <Text>Enter your email to reset your password</Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput dense={true} label="Email Address" mode="outlined" style={styles.inputContainerStyle} />
                    <Button mode="contained" onPress={() => navigation.goBack()}>RESET PASSWORD</Button>
                </View>

                <View style={styles.row} >
                    <Text onPress={() => navigation.goBack()}>Back to SIGN IN</Text>
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
        paddingTop: 25
    }
})
export default ForgotPasswordScreen
