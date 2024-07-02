import { Text, View } from "react-native";
import { useGlobalSearchParams } from 'expo-router';

export default function StickDetail() {
  const {id} = useGlobalSearchParams()
  console.log(id)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>这里是尺牍详情</Text>
    </View>
  );
}
