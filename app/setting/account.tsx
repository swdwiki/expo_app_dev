import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";


export default function SettingAccount() {
  // const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.setOptions({ headerShown: false });
  // }, [navigation]);
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>这里是账号页</Text>
      <Text>这里是账号页</Text>
      <Text>这里是账号页</Text>
      <Text>这里是账号页</Text>
      <Text>这里是账号页</Text>
    </View>
  );
}
