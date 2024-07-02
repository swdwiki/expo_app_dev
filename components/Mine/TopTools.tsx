import { View, StyleSheet, Text, DimensionValue, Image } from "react-native"
import { TabBarIcon } from "../layout/TabBarIcon";
import { IconKeys } from "@/types/iconfont";
import { Link } from "expo-router";


export default function TopTools() {
    return (
        <View style={styles.TopTools}>
            <View style={styles.ScanIcon}>
                <TabBarIcon name={'icon-scan'} size={26} />
            </View>
            <View style={styles.OtherToolIcons}>
                {/* <TabBarIcon name={"icon-sun"} size={26} style={styles.ToolIconsStyle} /> */}
                <View style={styles.RemindIcon}>
                    <TabBarIcon name={"icon-remind"} size={26} style={styles.ToolIconsStyle} />
                    <Text style={{ ...styles.RemindCountIcon, ...styles.RemindCountIconLow99 }}>89</Text>
                    {/* <Text style={{...styles.RemindCountIcon,...styles.RemindCountIconOver99}}>99+</Text> */}
                </View>
                <Link href={{
                    pathname:'/setting'
                }} style={{width:'100%'}}>
                    <TabBarIcon name={"icon-settings"} size={26} style={styles.ToolIconsStyle} />
                </Link>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    TopTools: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingLeft: '2.5%',
        paddingRight: '2.5%',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex:100
    },
    ScanIcon: {

    },
    OtherToolIcons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    ToolIconsStyle: {
        marginHorizontal: 8
    },
    RemindIcon: {
        position: 'relative'
    },
    RemindCountIcon: {
        position: 'absolute',
        height: 15,
        minWidth: 15,
        textAlign: 'center',
        paddingHorizontal: 3,
        backgroundColor: 'red',
        borderRadius: 15,
        color: '#fff',
        fontSize: 12,
        top: -5,
        right: 2
    },
    RemindCountIconOver99: {
        top: -5,
        right: -5
    },
    RemindCountIconLow99: {
        top: -5,
        right: 2
    }
});