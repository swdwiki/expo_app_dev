import IconFont from '@/font/iconfont';

type KeysOf<T extends Record<string, any>> = keyof T;

export type IconKeys = KeysOf<typeof IconFont>;