import { Stack } from "expo-router";
import { View, StyleSheet, Dimensions } from "react-native";
import { WebView } from 'react-native-webview';

export default function WebViews({ url, title }: { url: string; title: string; }) {

    const {
        height: deviceHeight,
        width: deviceWidth
    } = Dimensions.get('window');

    return (
        <View style={styles.SettingIndex}>
            <Stack.Screen
                options={{
                    title:title,
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerShadowVisible: false
                }}
            />
            <WebView bounces={false}
                scalesPageToFit={true}
                source={{ uri: url}}
                style={{ width: deviceWidth, height: deviceHeight }}>
            </WebView>
        </View>
    );
}

const styles = StyleSheet.create({
    SettingIndex: {
        marginTop: 10
    },
    SettingItemStyle: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '2.5%',
        backgroundColor: '#fff',
        width: '100%',
    },
    ItemText: {
        lineHeight: 50,
        fontSize: 16,
    },
    SettingItemRight: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
});