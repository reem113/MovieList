import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import MovieListItem from './MovieListItem';
import Seperator from '../Seperator';
import LoadingIndicator from '../LoadingIndicator';
// import { setPage } from '../../Redux/Action/Movies';



const MovieList = () => {

    const movies = useSelector(state => state.movies.results);

    // const dispatch = useDispatch();

    // const fetchResult = () => {
    //     dispatch(setPage(2));
    // }



    return (
        <SafeAreaView>
            <FlatList
                style={styles.list}
                data={movies}
                keyExtractor={item => item.id}
                // onEndReached={fetchResult}
                // onEndReachedThreshold={0.8}
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

})

export default MovieList;
