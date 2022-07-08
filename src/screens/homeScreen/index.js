import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import BackHeader from '../../components/header'
import styles from './styles';
import Container from '../../components/container';
import Loader from '../../components/loader';
import { useDispatch, useSelector } from 'react-redux'
import ProfileItem from '../../components/profileItem';
import ItemSeparator from '../../components/itemSeparator';
import SearchContainer from '../../components/searchContainer';
import FooterLoader from '../../components/footerLoader';
import EmptyComponent from '../../components/emptyComponent';
import { toggleBookMark, getUser, RESET_USERS } from '../../redux/actions/userActions';
import { setUserSearchText, searchUser } from '../../redux/actions/searchActions';


const HomeScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)
    const innerLoader = useSelector(state => state.users.innerLoader)
    const refreshLoader = useSelector(state => state.users.refreshingLoader)
    const searchText = useSelector(state => state.search.searchUserText)
    const searchedData = useSelector(state => state.search.searchedUsers)
    const loading = useSelector(state => state.users.loading)
    useEffect(() => {
        dispatch({type:RESET_USERS})
        dispatch(getUser(0, false, false, true))
        const unsubscribe = navigation.addListener('blur', () => {
            dispatch(setUserSearchText(''))
          });
      
          return unsubscribe;
    }, [])

    const onToggleBookMarks = (item, index) => {
        dispatch(toggleBookMark(item, index))
    }

    const fetchMoreRecords = () => {
        if (!searchText) {
            if (!innerLoader) {
                const lastIndex = users.length
                const { id } = users[lastIndex - 1];
                dispatch(getUser(id + 1, true))
            }
        }
    }

    const onRefresh = () => {
        if (!refreshLoader) {
            dispatch(getUser(0, false, true))
        }
    }

    const onSearchName = (name) => {
        dispatch(setUserSearchText(name))
        dispatch(searchUser(name))
    }

    if (loading) {
        return (
            <Loader loading={loading} />
        )
    }

    return (
        <Container>
            <BackHeader header='Home' />
            <View style={[styles.container]}>
                <SearchContainer value={searchText} onChange={onSearchName} />
                <FlatList
                    ListEmptyComponent={() => <EmptyComponent />}
                    refreshing={refreshLoader}
                    onRefresh={searchText?undefined:onRefresh}
                    onEndReached={fetchMoreRecords}
                    ListFooterComponent={() => <FooterLoader loading={innerLoader} />}
                    ItemSeparatorComponent={() => <ItemSeparator />}
                    keyExtractor={(item,index)=>item.login}
                    data={searchText ? searchedData : users}
                    renderItem={({ item, index }) => <ProfileItem index={index} onToggle={onToggleBookMarks} item={item} />}
                    keyboardShouldPersistTaps='handled'
                />
            </View>
        </Container>
    )
}

export default HomeScreen
