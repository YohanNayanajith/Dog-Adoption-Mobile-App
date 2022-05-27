import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { icons, images, SIZES, COLORS } from '../constants';

const EventDetail = (props) => {
    return (
        
        <View style={styles.item}>
            <View style={styles.title}>
                <Text style={{ fontSize: SIZES.h2, lineHeight:30, fontWeight:"bold"}}>{props.text.name}</Text>
                <Text style={{ fontSize: SIZES.h4, lineHeight:26, paddingTop: 10}}>{props.text.description}</Text>
                
            </View>
            <View style={styles.container}>
                <Icon name="calendar" color={COLORS.primary} size={20} />
                <Text style={{fontSize: 14, color: COLORS.grey, marginLeft: 5}}>
                    {props.text.date}
                </Text>
            </View>
            <View style={styles.container}>
                <Icon name="timer" color={COLORS.primary} size={20} />
                <Text style={{fontSize: 14, color: COLORS.grey, marginLeft: 5}}>
                    {props.text.time}
                </Text>
            </View>
            <View style={styles.container}>
                <Icon name="phone" color={COLORS.primary} size={20} />
                <Text style={{fontSize: 14, color: COLORS.grey, marginLeft: 5}}>
                    {props.text.tp}
                </Text>
            </View>
            <View style={styles.container}>
                <Icon name="map-marker" color={COLORS.primary} size={20} />
                <Text style={{fontSize: 14, color: COLORS.grey, marginLeft: 5}}>
                    {props.text.location}
                </Text>
            </View>
            {/* <View style={styles.itemLeft}> */}
                {/* <View style={styles.square}></View> */}
                {/* <Text style={styles.itemText}>{props.text}</Text> */}
            {/* </View> */}
            {/* <View style={styles.circular}></View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:12,
        // flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
        marginTop:20,
        marginHorizontal:20,
    },
    title: {
        alignItems:'center',
        marginBottom: 10,
    },
    container: {
        marginTop: 5, 
        flexDirection: 'row',
        marginHorizontal:20
    }
});

export default EventDetail;