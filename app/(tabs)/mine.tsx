import TopTools from "@/components/Mine/TopTools";
import UserCard from "@/components/Mine/UserCard";
import WrapCard, { WrapBtnItemsType } from "@/components/Mine/WrapCard";
import { Text, View, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Mine() {

    const userInfo = {
        nickname: '麦那个兜',
        avatar: 'https://p3-passport.byteacctimg.com/img/user-avatar/d8205ff7472a004e52a580ae78523ead~80x80.awebp',
        level: 1,
        userId: 1,
        fansCount: 37,
        followCount: 100,
        likeCount: 100
    }

    const creatorBtnItems: WrapBtnItemsType[] = [{
        title: '内容数据',
        icon: 'icon-contentdata',
        module: '',
        param: null
    },
    {
        title: '粉丝数据',
        icon: 'icon-fansdata',
        module: '',
        param: null
    }, {
        title: '创作活动',
        icon: 'icon-activity',
        module: '',
        param: null
    }, {
        title: '草稿箱',
        icon: 'icon-draft',
        module: '',
        param: null
    }]

    const signInItems: WrapBtnItemsType[] = [{
        title: '签到',
        icon: 'icon-signin',
        module: '',
        param: null
    },
    {
        title: '抽奖',
        icon: 'icon-lottery',
        module: '',
        param: null
    }, {
        title: '兑换',
        icon: 'icon-duihuan',
        module: '',
        param: null
    }, {
        title: '道具箱',
        icon: 'icon-reward',
        module: '',
        param: null
    }]

    const toolsItems: WrapBtnItemsType[] = [{
        title: '我的点赞',
        icon: 'icon-like-record',
        module: '',
        param: null,
    },
    {
        title: '我的圈子',
        icon: 'icon-quanzi',
        module: '',
        param: null,
    },
    {
        title: '浏览记录',
        icon: 'icon-read-record',
        module: '',
        param: null,
    },
    {
        title: '账号设置',
        icon: 'icon-account-setting',
        module: '/setting/account',
        param: null,
    },
    {
        title: '帮助中心',
        icon: 'icon-help-center',
        module: '',
        param: null,
    },
    {
        title: '意见反馈',
        icon: 'icon-report',
        module: '',
        param: null,
    }]

    //0 #ec6b77 1 #eb6368 2 #eb5c5a 3 #ea5351
    return (
        <View style={{height:'100%'}}>
            {/* 这部分是顶部菜单 */}
            <TopTools />
            <ScrollView>
                {/* 这部分是个人信息 */}
                <UserCard UserInfo={userInfo} />
                {/* 这部分是签到数据模块 */}
                <WrapCard showMore={false} itemsList={signInItems} iconSize={40} />
                {/* 这部分是创作者中心 */}
                <WrapCard showMore={true} itemsList={creatorBtnItems} showHead={true} headTitle="创作者中心" iconSize={32} />
                {/* 这部分是常用功能 */}
                <WrapCard itemsList={toolsItems} showMore={false} showHead={true} headTitle="常用功能" iconSize={32} />
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
});