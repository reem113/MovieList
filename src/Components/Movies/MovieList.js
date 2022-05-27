import React from 'react';
import { useSelector } from 'react-redux';
import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import MovieListItem from './MovieListItem';
import Seperator from '../Seperator';
import LoadingIndicator from '../LoadingIndicator';



const MovieList = () => {

    const movies = useSelector(state => state.movies.results);
    return (
        <SafeAreaView>
            <FlatList
                style={styles.list}
                data={movies}
                keyExtractor={item => item.id}

                onEndReachedThreshold={0.3}
                ItemSeparatorComponent={() => {
                    return <Seperator />
                }}
                renderItem={({ item }) => {
                    return (
                        <MovieListItem
                            title={item.title}
                            overview={item.overview}
                            date={item.release_date}
                            path={item.poster_path} />
                    )
                }}
            />
            <LoadingIndicator />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    list: {
    }
})

export default MovieList;
