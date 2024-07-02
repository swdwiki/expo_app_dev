import { TabBarIcon } from "@/components/layout/TabBarIcon";
import { Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function SettingIndex() {
  interface SettingItem {
    name: string;
    module?: string;
    hideBottom: Boolean;
    showRight: Boolean;
  }
  const settings: SettingItem[] = [{
    name: '编辑资料',
    module: '/setting/profile',
    hideBottom: true,
    showRight: false
  }, {
    name: '账号设置',
    module: '/setting/account',
    hideBottom: true,
    showRight: false
  }, {
    name: '推送消息设置',
    module: '/setting/pushmsg',
    hideBottom: false,
    showRight: false
  },
  {
    name: '检查更新',
    module: '/setting/update',
    hideBottom: false,
    showRight: false,
  },
  {
    name: '缓存管理',
    module: '/setting/cache',
    hideBottom: false,
    showRight: false,
  }, {
    name: '关于',
    module: '/setting/about',
    hideBottom: false,
    showRight: false
  }]
  return (
    <View style={styles.SettingIndex}>
      <Stack.Screen
        options={{
          title: '设置',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: false
        }}
      />
      {settings.map((item: SettingItem, index: number) => {
        return (
          <View key={index} style={{ ...styles.SettingItemStyle, ...(item.hideBottom ? styles.hideBottom : styles.showBottom) }}>
            <Text style={styles.ItemText}>{item.name}</Text>
            <View style={styles.SettingItemRight}>
              { item.showRight && <Text style={styles.SettingItemRightText}>10</Text>}
            <TabBarIcon name='icon-more' size={20} />
            </View>
          </View>
        )
      })}
      <View style={styles.LogOutItemStyle}>
        <Text style={styles.LogOutItemText}>退出账号</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  SettingIndex: {
    marginTop: 10
  },
  SettingItemStyle: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingHorizontal: '2.5%',
    backgroundColor: '#fff',
    width: '100%',
  },
  ItemText: {
    lineHeight: 60,
    fontSize: 16,
  },
  hideBottom: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  showBottom: {
    marginBottom: 10
  },
  LogOutItemStyle: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: '2.5%',
    fontSize: 20,
    backgroundColor: '#fff',
    width: '100%',
  },
  LogOutItemText: {
    color: 'red',
    lineHeight: 60,
    fontWeight: 'bold'
  },
  SettingItemRight:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems:'center',
  },
  SettingItemRightText:{
    marginRight:10,
    color: '#8a8a8a',
    fontSize:16
  }
});