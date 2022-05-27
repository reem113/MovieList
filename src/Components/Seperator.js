import React from 'react';
import { View, StyleSheet } from 'react-native';

const Seperator = () => {
    return (
        <View style={styles.separator}></View>
    );
}

const styles = StyleSheet.create({
    separator: {
        height: 0.3,
        width: "90%",
        backgroundColor: '#f6be80',
        alignSelf: 'center',
        marginVertical: "3%",
    }
})

export default Seperator;
