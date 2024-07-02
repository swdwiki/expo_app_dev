export interface AxiosResponseData<T = any> {
  data: T;
  status: number;
  statusText: string;
}

// 定义错误类型
export interface AxiosError {
  message: string;
}

// 自定义hook的类型
export interface UseAxiosResult<T = any> {
  data: T | null;
  error: AxiosError | null;
  loading: boolean;
}
