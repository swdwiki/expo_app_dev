import { View, StyleSheet, Text, DimensionValue } from "react-native"
import { TabBarIcon } from "../layout/TabBarIcon";
import { IconKeys } from "@/types/iconfont";
import { Link } from "expo-router";

export type WrapBtnItemsType = {
    title: string;
    icon: IconKeys;
    module: string;
    param: any;
}

export type WrapCardOption = {
    itemsList: WrapBtnItemsType[];
    showHead?: Boolean;
    headTitle?: string;
    moreText?: string;
    iconSize?: number;
    showMore: Boolean;
    itemWidth?: DimensionValue;
}


export default function WrapCard({
    itemsList,
    showHead,
    headTitle,
    moreText,
    iconSize,
    showMore,
    itemWidth
}: WrapCardOption) {
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
                        if (!item.module) {
                            return (
                                <View key={index} style={{ ...styles.itemStyle, width: itemWidth || '25%' }}>
                                    <TabBarIcon name={item.icon as IconKeys} size={iconSize} />
                                    <Text style={styles.itemTitle}>{item.title}</Text>
                                </View>
                            )
                        }else{
                            return (
                                <Link href={{pathname:item.module}} key={index} style={{ ...styles.itemStyle, width: itemWidth || '25%' }}>
                                    <TabBarIcon name={item.icon as IconKeys} size={iconSize} />
                                    <Text style={styles.itemTitle}>{item.title}</Text>
                                </Link>
                            )
                        }
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
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingTop: 15,
    },
    wrapHead: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        paddingHorizontal: 20
    },
    itemsGroupStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: 20
    },
    itemStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingBottom: 20
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
        fontSize: 15,
        fontWeight: 'bold'
    },
    headMoreText: {
        color: '#8a8a8a',
        fontSize: 13
    }
});