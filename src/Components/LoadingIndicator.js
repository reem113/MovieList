import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

const LoadingIndicator = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator style={styles.indicator} size="large" color="#f0932b" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        backgroundColor: "black"
    },
    indicator: {
        justifyContent: "center",
        alignSelf: "center",
        margin: "25%",
        padding: "5%"
    }
})

export default LoadingIndicator;
