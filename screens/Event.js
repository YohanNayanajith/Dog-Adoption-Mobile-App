import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { icons, images, SIZES, COLORS } from '../constants';
import Header from '../components/Header.component';
import EventDetail from '../components/Event.component';
import eventDetails from '../constants/eventsData';

const Event = () => {
    
    function setEvents() {
        return(
        eventDetails.map((eventDetail) =>
            <EventDetail text={eventDetail}  />
        ));
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Event"}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                {setEvents()}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
})

export default Event;