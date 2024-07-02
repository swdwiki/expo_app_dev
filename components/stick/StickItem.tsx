import { View, StyleSheet, Text } from "react-native"
import { TabBarIcon } from "./layout/TabBarIcon";
import { IconKeys } from "@/types/iconfont";

export type WrapBtnItemsType = {
    title: string;
    icon: IconKeys;
    module: string;
    param: any;
}

export type StickItemType = {
    content: WrapBtnItemsType[];
    author?: Boolean;
    commentCount?: string;
    like?: string;
}


export default function StickItem({
    content,
    author,
    comment,
    like,

}: StickItemType) {
    return (
        <View style={styles.wrapCard}>
            {showHead && (
                <View style={styles.wrapHead}>
                    <Text style={styles.headTitle}>{showHead && headTitle}</Text>
                    {showMore && (
                        <View style={styles.headMore}>
                            <Text style={styles.headMoreText}>{moreText || '更多'}</Text>
                            <TabBarIcon name='icon-more' size={16} />
                        </View>
                    )}
                </View>
            )}
            <View style={styles.itemsGroupStyle}>
                {
                    itemsList.map((item, index) => {
                        return (
                            <View key={index} style={styles.itemStyle}>
                                <TabBarIcon name={item.icon as IconKeys} size={iconSize} />
                                <Text style={styles.itemTitle}>{item.title}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    wrapCard: {
        width: '95%',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    wrapHead: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
    },
    itemsGroupStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'nowrap',
        width: '100%',
        paddingBottom: 10,
        marginTop: 20
    },
    itemStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    itemTitle: {
        marginTop: 10
    },
    headMore: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    headTitle: {
        fontSize: 15
    },
    headMoreText: {
        color: '#8a8a8a',
        fontSize: 13
    }
});