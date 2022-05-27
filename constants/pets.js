// import images from '../constants';
// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   ActivityIndicator,
//   FlatList,
// } from "react-native";

// const URL = "https://62907d9827f4ba1c65ba1783.mockapi.io/api/v1/events";

// const pets = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(movieURL)
//       .then((response) => response.json()) // get response, convert to json
//       .then((json) => {
//         setData(json);
//       })
//       .catch((error) => alert(error)) // display errors
//       .finally(() => setLoading(false)); // change loading state
//   }, []);

//   async function getMoviesAsync() {
//     try {
//       let response = await fetch(URL);
//       let json = await response.json();
//       setData(json);
//       setLoading(false);
//     } catch (error) {
//       alert(error);
//     }
//   }

//   return (
//     data
//   );
// };

const pets = [
  {
    id: '1',
    name: 'Bally',
    image: require('../assets/images/dog-image1.jpg'),
    type: 'German Shepherd',
    age: '2 years old',
  },
  {
    id: '2',
    name: 'Max',
    image: require('../assets/images/dog-image1.jpg'),
    type: 'Foxhound',
    age: '2 years old',
  },
  {
    id: '3',
    name: 'Browny',
    image: require('../assets/images/dog-image1.jpg'),
    type: 'Foxhound',
    age: '2 years old',
  },
  {
    id: '4',
    name: 'Blacky',
    image: require('../assets/images/dog-image1.jpg'),
    type: 'Foxhound',
    age: '2 years old',
  },
  {
    id: '5',
    name: 'Whita',
    image: require('../assets/images/dog-image1.jpg'),
    type: 'Foxhound',
    age: '2 years old',
  },
]

// const pets = [
//     {
//       pet: 'cats',
//       pets: [
//         {
//           id: '1',
//           name: 'Lily',
//           image: require('../assets/images/dog-image1.jpg'),
//           type: 'Chausie',
//           age: '5 years old',
//         },
//         {
//           id: '2',
//           name: 'Lucy',
//           image: require('../assets/images/dog-image1.jpg'),
//           type: 'Bobtail',
//           age: '2 years old',
//         },
//         {
//           id: '3',
//           name: 'Nala',
//           image: require('../assets/images/dog-image1.jpg'),
//           type: 'Ragamuffin',
//           age: '2 years old',
//         },
//       ],
//     },
//     {
//       pet: 'dogs',
//       pets: [
//         {
//           id: '1',
//           name: 'Bally',
//           image: require('../assets/images/dog-image1.jpg'),
//           type: 'German Shepherd',
//           age: '2 years old',
//         },
//         {
//           id: '2',
//           name: 'Max',
//           image: require('../assets/images/dog-image1.jpg'),
//           type: 'Foxhound',
//           age: '2 years old',
//         },
//         {
//           id: '3',
//           name: 'Browny',
//           image: require('../assets/images/dog-image1.jpg'),
//           type: 'Foxhound',
//           age: '2 years old',
//         },
//         {
//           id: '4',
//           name: 'Blacky',
//           image: require('../assets/images/dog-image1.jpg'),
//           type: 'Foxhound',
//           age: '2 years old',
//         },
//         {
//           id: '5',
//           name: 'Whita',
//           image: require('../assets/images/dog-image1.jpg'),
//           type: 'Foxhound',
//           age: '2 years old',
//         },
//       ],
//     },
//     {
//       pet: 'birds',
//       pets: [
//         {
//           id: '1',
//           name: 'Coco',
//           image: require('../assets/images/dog-image1.jpg'),
//           type: 'Parrot',
//           age: '2 years old',
//         },
//         {
//           id: '2',
//           name: 'Alfie',
//           image: require('../assets/images/dog-image1.jpg'),
//           type: 'Parrot',
//           age: '4 years old',
//         },
//       ],
//     },
//     {
//       pet: 'bunnies',
//       pets: [
//         {
//           id: '1',
//           name: 'Boots',
//           image: require('../assets/images/dog-image1.jpg'),
//           type: 'Angora',
//           age: '1 years old',
//         },
//         {
//           id: '2',
//           name: 'Pookie',
//           image: require('../assets/images/dog-image1.jpg'),
//           type: 'Angora',
//           age: '1 years old',
//         },
//       ],
//     },
//   ];
  
  export default pets;
  