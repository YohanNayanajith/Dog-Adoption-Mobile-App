import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { icons, images, SIZES, COLORS } from '../constants';
import Header from '../components/Header.component';

const Setting = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Setting"}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
})

export default Setting;