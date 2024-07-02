import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/layout/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TextProps } from 'react-native';
import { type IconKeys } from '@/types/iconfont';


export type TabBarProps = TextProps & {
    name: string;
    icon?: string;
    selectIcon?: string;
    module: string;
};



export default function TabLayout() {
    const colorScheme = useColorScheme();

    const tabBarList: TabBarProps[] = [{
        name: '首页',
        icon: 'icon-home-noselect',
        selectIcon: 'icon-home-selected',
        module: 'index'
    }, {
        name: '尺牍',
        icon: 'icon-stick-noselect',
        selectIcon: 'icon-stick-selected',
        module: 'stick'
    },
    {
        name: '创作',
        icon: 'icon-tongren-noselect',
        selectIcon: 'icon-tongren-selected',
        module: 'tongren'
    }, {
        name: '发现',
        icon: 'icon-find-noselect',
        selectIcon: 'icon-find-selected',
        module: 'find'
    }, {
        name: '我',
        icon: 'icon-mine-noselect',
        selectIcon: 'icon-mine-selected',
        module: 'mine'
    }]

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
            }}>
            {
                tabBarList.map((tab, index) => {
                    return (
                        <Tabs.Screen
                        key={index}
                            name={tab.module}
                            options={{
                                title: tab.name,
                                tabBarIcon: ({ color, focused }) => (
                                    <TabBarIcon name={(focused ? tab.selectIcon : tab.icon) as IconKeys} />
                                ),
                            }}

                        />
                    )
                })
            }
        </Tabs>
    );
}
