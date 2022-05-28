import React, { useState, useEffect } from "react";
import {
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SIZES, COLORS } from "../constants";

const URL = "https://62907d9827f4ba1c65ba1783.mockapi.io/api/v1/adoptions";
const URL_register = "https://62907d9827f4ba1c65ba1783.mockapi.io/api/v1/register";

const PetsDetail = ({ navigation, route }) => {
  const [userName, setUserName] = useState([]);
  const navigation = useNavigation();
  const pet = route.params;

  let date = new Date();
  let current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();

  const updatePets = async() => {
    const URL_pets = "https://62907d9827f4ba1c65ba1783.mockapi.io/api/v1/pets/"+pet?.id;
    try {
      let response = await fetch(URL_pets,{
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id:pet?.id,
          pet_image:pet?.pet_image,
          pet_name: pet?.pet_name,
          gender: pet?.gender, 
          age:pet?.age,  
          description:pet?.description,
          vaccinated:pet?.vaccinated,
          adopted: "Yes",
        })
      });
      let json = await response.json();
      console.log(json);
      
    } catch (error) {
      alert(error);
    }
  }

  const updateAdoption = async () => {
    getUserName();
    console.log("Update adoption");
    try {
      let response = await fetch(URL,{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id:null,
          pet_image:pet?.pet_image,
          pet_name: pet?.pet_name,
          owner: userName,
          date: current_date,
        })
      });
      let json = await response.json();
      updatePets();
      console.log(json);
      alert("Successfully!");
      navigation.navigate("Home");
    } catch (error) {
      alert(error);
    }
    
  };

  const getUserName = async() => {
    try {
      let response = await fetch(URL_register);
      let json = await response.json();
      setUserName(json);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.background} />
      <View style={{ height: 400, backgroundColor: COLORS.background }}>
        <ImageBackground
          resizeMode="contain"
          source={{ uri: pet?.pet_image }}
          style={{
            height: 280,
            top: 20,
          }}
        >
          {/* Render  Header */}
          <View style={style.header}>
            <Icon
              name="arrow-left"
              size={28}
              color={COLORS.dark}
              onPress={navigation.goBack}
            />
            <Icon name="dots-vertical" size={28} color={COLORS.dark} />
          </View>
        </ImageBackground>

        <View style={style.detailsContainer}>
          {/* Pet name and gender icon */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontSize: 20, color: COLORS.dark, fontWeight: "bold" }}
            >
              {pet.pet_name}
            </Text>
            {/* <Icon name="gender-male" size={25} color={COLORS.grey} /> */}
          </View>

          {/* Render Pet type and age */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 12, color: COLORS.dark }}>{pet.description}</Text>
            <Text style={{ fontSize: 13, color: COLORS.dark }}>{pet.age}</Text>
          </View>

          {/* Render location and icon */}
          <View style={{ marginTop: 5, flexDirection: "row" }}>
            <Icon name="gender-male-female-variant" color={COLORS.primary} size={20} />
            <Text style={{ fontSize: 14, color: COLORS.grey, marginLeft: 5 }}>
              {pet.gender}
            </Text>
          </View>
          <View style={{ marginTop: 5, flexDirection: "row" }}>
            <Icon name="emoticon-sick" color={COLORS.primary} size={20} />
            <Text style={{ fontSize: 14, color: COLORS.grey, marginLeft: 5 }}>
              {pet.vaccinated}
            </Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 80, justifyContent: "space-between", flex: 1 }}>
        <View style={style.footer}>
          <View style={style.iconCon}>
            <Icon name="heart-outline" size={22} color={COLORS.white} />
          </View>
          <View style={style.btn}>
            <Text style={{ color: COLORS.white, fontWeight: "bold" }} onPress={updateAdoption} >
              ADOPTION
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  detailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    flex: 1,
    bottom: -60,
    borderRadius: 18,
    elevation: 10,
    padding: 20,
    justifyContent: "center",
  },
  comment: {
    marginTop: 10,
    fontSize: 12.5,
    color: COLORS.dark,
    lineHeight: 20,
    marginHorizontal: 20,
  },
  footer: {
    height: 100,
    backgroundColor: COLORS.light,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  iconCon: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  btn: {
    backgroundColor: COLORS.primary,
    flex: 1,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
});
export default PetsDetail;
