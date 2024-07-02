// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';
import { Iconfont } from './IconFont';

export function TabBarIcon({ style,size, ...rest }: IconProps<ComponentProps<typeof Iconfont>['name']>) {
  return <Iconfont size={size || 26} style={[style]} name={rest.name} />;
}
