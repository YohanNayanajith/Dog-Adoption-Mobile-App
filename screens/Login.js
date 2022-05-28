import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  AsyncStorage,
} from "react-native";
import Logo from "../assets/images/logo.jpg";
// import images from '../constants';
import CustomInput from "../components/CustomInput.component";
import CustomButton from "../components/CustomButton.component";
import SocialSignInButtons from "../components/SocialSignInButtons.component";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const URL = "https://62907d9827f4ba1c65ba1783.mockapi.io/api/v1/register";

const Login = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = async (data) => {
    console.log(data);
    let flag = false;
    try {
      let response = await fetch(URL);
      let result = await response.json();
        result.map((x) => {
          if((x.name == data.username) && (x.password == data.password)){
            flag = true;
            AsyncStorage.setItem("userName",x.name);
            // <eventsData data={x.name} />
          }
        });

        if(flag){
          navigation.navigate("Tabs");
        }else {
          alert("Entered username & password is wrong!");
        }
    } catch (error) {
      alert(error);
    }

  };

  //   const onForgotPasswordPressed = () => {
  //     navigation.navigate("ForgotPassword");
  //   };

  const onSignUpPress = () => {
    navigation.navigate("Register");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 3,
              message: "Password should be minimum 3 characters long",
            },
          }}
        />

        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />

        {/* <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        /> */}

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default Login;
