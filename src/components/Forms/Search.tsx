import React from 'react'
import { Searchbar } from 'react-native-paper';

type props = {
    searchQuery: string
    setSearchQuery: any
}
const Search = ({ searchQuery, setSearchQuery }: props) => {
    const onChangeSearch = (query: string) => setSearchQuery(query)
    return (
            <Searchbar
                style={{borderRadius: 15}}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />

    )
}

export default Search