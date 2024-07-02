// import { Stack } from "expo-router";
// import { Text, View } from "react-native";

// export default function StickLayout() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
        
//     </View>
//   );
// }


import { Stack } from 'expo-router';

export default function StickLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown:false
        // headerStyle: {
        //   backgroundColor: '#f4511e',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // },
      }}>

{/* Optionally configure static options outside the route.*/}


      <Stack.Screen name="[id]" options={{headerShown:false}} />
    </Stack>
  );
}
