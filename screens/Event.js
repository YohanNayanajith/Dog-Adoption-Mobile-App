import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { icons, images, SIZES, COLORS } from "../constants";
import Header from "../components/Header.component";
import EventDetail from "../components/Event.component";
import eventDetails from "../constants/eventsData";

const URL = "https://62907d9827f4ba1c65ba1783.mockapi.io/api/v1/events";

const Event = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL,{method:'GET'})
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
        setData(json);
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, []);

  let count = 0;

  function setEvents() {
    return data.map((eventDetail) => <EventDetail key={count+=1} text={eventDetail} />);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Event"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View>
            {setEvents()}
          </View>
        )}
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
});

export default Event;
