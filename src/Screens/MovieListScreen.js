import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { getMovies } from '../Redux/Action/Movies';
import MovieList from '../Components/Movies/MovieList';
import LoadingIndicator from '../Components/LoadingIndicator';
import Seperator from '../Components/Seperator';


const MovieListScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch]);

    return (
        <View style={styles.container}>
            <MovieList />
            <LoadingIndicator style={styles.indicator} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",

    },
    indicator: {
        marginBottom: "5%"
    }
})

export default MovieListScreen;
