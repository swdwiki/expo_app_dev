import { TabBarIcon } from "@/components/layout/TabBarIcon";
import { Stack,Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function SettingAbout() {
    interface SettingItem {
        name: string;
        document?: string;
    }
    const settings: SettingItem[] = [{
        name: '用户协议',
        document: 'https://beian.mps.gov.cn/#/query/webSearch',
    },
    {
        name: '隐私政策',
        document: 'https://beian.mps.gov.cn/#/query/webSearch',
    },
    {
        name: '个人信息收集清单',
        document: 'https://beian.mps.gov.cn/#/query/webSearch',
    },
    {
        name: '应用权限说明',
        document: 'https://beian.mps.gov.cn/#/query/webSearch',
    },
    {
        name: '接入SDK清单',
        document: 'https://beian.mps.gov.cn/#/query/webSearch',
    },
    {
        name: 'App备案号',
        document: 'https://beian.mps.gov.cn/#/query/webSearch',
    }]
    return (
        <View style={styles.SettingIndex}>
            <Stack.Screen
                options={{
                    title: '关于',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerShadowVisible: false
                }}
            />
            {settings.map((item: SettingItem, index: number) => {
                return (
                    <Link key={index} style={styles.SettingItemStyle} href={{pathname:'webview',params:{
                        url:item.document,title:item.name
                    }}}>
                        <Text style={styles.ItemText}>{item.name}</Text>
                        <View style={styles.SettingItemRight}>
                            <TabBarIcon name='icon-more' size={20} />
                        </View>
                    </Link>
                )
            })}
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
        borderBottomColor:'#eee',
        borderBottomWidth:1
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