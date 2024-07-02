import { View, StyleSheet, Text, DimensionValue, Image } from "react-native"
import { TabBarIcon } from "../layout/TabBarIcon";
import { IconKeys } from "@/types/iconfont";

export type userInfoType = {
    nickname: string;
    avatar: string;
    level: number;
    userId: number;
}

export type UserCardOption = {
    UserInfo: userInfoType;
}


export default function UserCard({
    UserInfo
}: UserCardOption) {
    return (
        <View style={styles.UserCard}>
            <View style={styles.UserInfoWrap}>
                <View style={styles.UserInfo}>
                    <Image source={{ uri: UserInfo.avatar }}
                        style={styles.UserAvatar} />
                    <View style={styles.InfoWrap}>
                        <Text style={styles.Nickname}>{UserInfo.nickname}</Text>
                        <View style={styles.Info}>
                            <Text style={styles.LevelCard}>LV.1 大眼蛙</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.RightMore}>
                    <Text style={styles.MoreText}>个人主页</Text>
                    <TabBarIcon name='icon-more' size={18} />
                </View>
            </View>
            <View style={styles.UserDataWrap}>
                <View style={styles.UserDataItem}>
                    <Text style={styles.DataItemCount}>12</Text>
                    <Text style={styles.DataItemTitle}>关注</Text>
                </View>
                <View style={styles.UserDataItem}>
                    <Text style={styles.DataItemCount}>34</Text>
                    <Text style={styles.DataItemTitle}>粉丝</Text>
                </View>
                <View style={styles.UserDataItem}>
                    <Text style={styles.DataItemCount}>123</Text>
                    <Text style={styles.DataItemTitle}>点赞</Text>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    UserCard: {
        display: 'flex',
        flexDirection: 'column',
        width: '95%',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        marginTop:60
    },
    UserInfoWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    UserInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 10
    },
    InfoWrap: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    UserAvatar: {
        width: 60,
        height: 60,
        borderRadius: 60
    },
    Nickname: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10
    },
    Info: {
        display: 'flex',
        flexDirection: 'row'
    },
    LevelCard: {
        backgroundColor: 'rgba(30,128,255,0.9)',
        color: '#fff',
        // borderColor:'rgba(30,128,255,0.3)',
        // backgroundColor:'rgba(30,128,255,0.05)',
        // color:'#1e80ff',
        borderRadius: 20,
        paddingVertical: 2,
        paddingHorizontal: 10,
        fontSize: 12,
        marginLeft: 10,
        marginVertical: 5,
    },
    RightMore: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    MoreText: {
        fontSize: 14,
        color: '#8a8a8a',
        marginRight: 5
    },
    UserDataWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 5,
    },
    UserDataItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '33.33%',
        textAlign: 'center'
    },
    DataItemCount: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 5
    },
    DataItemTitle: {
        fontSize: 14,
        marginVertical: 5,
        // color:'#8a8a8a',
    }
});