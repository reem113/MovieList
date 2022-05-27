import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const MovieListItem = ({ title, overview, date, path }) => {

    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
    var imgPath = imageBaseUrl + path;



    return (
        <View style={styles.container}>
            <Image style={styles.img}
                source={{ uri: imgPath }} />
            <View style={styles.textWrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.overView}>{overview}</Text>
                <View style={styles.dateWrapper}>
                    <Text style={styles.releaseDate}>Release Date:</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginVertical: "3%",

    },
    img: {
        marginLeft: 20,
        width: 150,
        height: 300,
        resizeMode: "cover"


    }, textWrapper: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center"

    },
    title: {
        fontWeight: "600",
        fontSize: 26,
        color: "#f0932b",
        marginRight: 10,
        marginBottom: 12


    },
    overView: {
        flexWrap: "wrap",
        marginRight: 15,
        fontSize: 16

    },
    dateWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16


    },
    releaseDate: {
        fontSize: 10,


    },
    date: {
        marginRight: 32,
        fontSize: 10,
        color: "#f0932b"
    }
})

export default MovieListItem;
