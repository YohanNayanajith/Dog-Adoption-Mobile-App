import React, { useState, useEffect } from "react";
import {
  Dimensions,
  SafeAreaView,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { icons, images, SIZES, COLORS } from "../constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import pets from "../constants/pets";
const { height } = Dimensions.get("window");

// const petCategories = [
//     {name: 'DOGS', icon: 'dog'},
//     {name: 'CATS', icon: 'cat'},
//     {name: 'BIRDS', icon: 'ladybug'},
//     {name: 'BUNNIES', icon: 'rabbit'},
//   ];

const URL = "https://62907d9827f4ba1c65ba1783.mockapi.io/api/v1/pets";

const Card = ({ pet, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("PetsDetail", pet)}
    >
      <View style={style.cardContainer}>
        {/* Render the card image */}
        <View style={style.cardImageContainer}>
          <Image
            source={{uri:pet.image}}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>

        {/* Render all the card details here */}
        <View style={style.cardDetailsContainer}>
          {/* Name and gender icon */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontWeight: "bold", color: COLORS.dark, fontSize: 20 }}
            >
              {pet?.name}
            </Text>
            <Icon name="gender-male" size={22} color={COLORS.grey} />
          </View>

          {/* Render the age and type */}
          <Text style={{ fontSize: 12, marginTop: 5, color: COLORS.dark }}>
            {pet?.type}
          </Text>
          <Text style={{ fontSize: 10, marginTop: 5, color: COLORS.grey }}>
            {pet?.age}
          </Text>

          {/* Render distance and the icon */}
          <View style={{ marginTop: 5, flexDirection: "row" }}>
            <Icon name="map-marker" color={COLORS.primary} size={18} />
            <Text style={{ fontSize: 12, color: COLORS.grey, marginLeft: 5 }}>
              Distance:7.8km
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const PetsHome = () => {
  const [selectedCategoryIndex, setSeletedCategoryIndex] = React.useState(0);
  const [filteredPets, setFilteredPets] = React.useState([]);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    fetch(URL,{method:'GET'})
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
        setData(json);
        // setTitle(json.title);
        // setDescription(json.description);
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, []);

  // Also get call asynchronous function
  async function getMoviesAsync() {
    try {
      let response = await fetch(URL);
      let json = await response.json();
      setData(json);
      // setTitle(json.title);
      // setDescription(json.description);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  // componentDidMount = () => {
  //   this.getMoviesAsync();
  // }

  // const fliterPet = index => {
  //   const currentPets = pets.filter(
  //     item => item?.pet?.toUpperCase() == petCategories[index].name,
  //   )[0]?.pets;
  //   setFilteredPets(currentPets);
  // };

  // React.useEffect(() => {
  //   fliterPet(0);
  // }, []);

  return (
    <SafeAreaView style={{ flex: 1, color: COLORS.white }}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={style.mainContainer}>
        {/* Render the search inputs and icons */}
        <View style={style.searchInputContainer}>
          <Icon name="magnify" size={24} color={COLORS.grey} />
          <TextInput
            placeholderTextColor={COLORS.grey}
            placeholder="Search pet to adopt"
            style={{ flex: 1 }}
          />
          <Icon name="sort-ascending" size={24} color={COLORS.grey} />
        </View>

        {/* Render the cards with flatlist */}
        {/* <View style={{ marginTop: 20, marginBottom: 100 }}>
          <FlatList
            showsVerticalScrollIndicator={true}
            data={pets}
            renderItem={({ item }) => (
              <Card pet={item} navigation={navigation} />
            )}
          />
        </View> */}

        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={{ marginTop: 20, marginBottom: 100 }}>
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Card pet={item} navigation={navigation} />
              )}
            />
          </View>
        )}


      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    //   marginTop: 20,
    paddingHorizontal: 20,
    //   paddingVertical: 40,
    minHeight: height,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryBtn: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  categoryBtnName: {
    color: COLORS.dark,
    fontSize: 10,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  cardDetailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: "center",
  },
  cardImageContainer: {
    height: 150,
    width: 140,
    backgroundColor: COLORS.background,
    borderRadius: 20,
  },
});

export default PetsHome;
