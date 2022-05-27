import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { icons, SIZES, COLORS } from '../constants';

const Header = (props) => {

    const navigation = useNavigation();
    const signOut = () => {
        navigation.navigate("Login");
    }

    return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.dog}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ fontSize: SIZES.h3, lineHeight:22 }}>{props.title}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={signOut}
                >
                    <Image
                        source={icons.logout}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
    );
};

export default Header;