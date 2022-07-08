import { View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import BackHeader from '../../components/header'
import styles from './styles'
import Container from '../../components/container'
import SearchContainer from '../../components/searchContainer'
import ItemSeparator from '../../components/itemSeparator'
import ProfileItem from '../../components/profileItem'
import { useDispatch, useSelector } from 'react-redux'
import EmptyComponent from '../../components/emptyComponent'
import { setSearchText, searchUser } from '../../redux/actions/searchActions'
import { removeBookMark } from '../../redux/actions/userActions'

const MapScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.bookMarkedUsers)
    const searchText = useSelector(state => state.search.searchText)
    const searchedBookmarkedUsers = useSelector(state => state.search.searchedBookmarkedUsers)

    useEffect(()=>{
        const unsubscribe = navigation.addListener('blur', () => {
            dispatch(setSearchText(''))
          });
      
          return unsubscribe;
    },[])

    const onToggleBookMarks = (item, index) => {
        dispatch(removeBookMark(item))
    }
    const onSearchName = (name) => {
        dispatch(setSearchText(name))
        dispatch(searchUser(name, true))
    }
    return (
        <Container>
            <BackHeader header='Bookmarks' />
            <View style={[styles.container]}>
                <SearchContainer value={searchText} onChange={onSearchName} />
                <FlatList
                    ListEmptyComponent={() => <EmptyComponent />}
                    ItemSeparatorComponent={() => <ItemSeparator />}
                    keyExtractor={(item,index)=>item.login}
                    data={searchText ? searchedBookmarkedUsers : users}
                    renderItem={({ item, index }) => <ProfileItem index={index} onToggle={onToggleBookMarks} item={item} />}
                    keyboardShouldPersistTaps='handled'
                />
            </View>
        </Container>
    )
}

export default MapScreen