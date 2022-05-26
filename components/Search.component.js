import React,{ useState } from 'react';
// import { SearchBar } from 'react-native-elements';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

const Search = (props) => {
    // const [isSearch,setIsSearch] = useState('');

    // const updateSearch = (event) => (
    //     setIsSearch(isSearch)
    // )

    return (
    //     <SearchBar
    //     placeholder="Type Here..."
    //     onChangeText={updateSearch}
    //     value={isSearch}
    //   />
        <View style={{paddingHorizontal:20}}>
            <Text>Search Component</Text>
        </View>
    );
};

export default Search;