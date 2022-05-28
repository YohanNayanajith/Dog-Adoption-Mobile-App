import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { icons, images, SIZES, COLORS } from "../constants";
import Header from "../components/Header.component";

const Setting = () => {

  return (

    <View>
        <Header title={"Setting"} />
        <Text>Setting Component called</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
});

export default Setting;
