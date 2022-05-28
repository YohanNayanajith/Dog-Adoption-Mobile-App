import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
} from "react-native";

import { icons,SIZES, COLORS } from '../constants';
import PetsHome from "../components/PetsHome.component";
import Header from "../components/Header.component";

const Home = ({ navigation }) => {

    function renderMainCategories() {
        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ fontSize: SIZES.h1, lineHeight:36, fontWeight:"bold"}}>Adopt a pet</Text>
                <Text style={{ fontSize: SIZES.h4, lineHeight:26, paddingTop: 10}}>Help us to give them happiness by adopting them with kindness and love.</Text>
                {/* <Text style={{ ...FONTS.h1 }}>Categories</Text> */}

                {/* <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                /> */}
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* {renderHeader()} */}
            <Header title={"Doggies"}/>
            {renderMainCategories()}
            {/* <Search /> */}
            <PetsHome />
            {/* {renderRestaurantList()} */}
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;