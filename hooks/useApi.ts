import axios,{ type AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { AxiosResponseData, UseAxiosResult,AxiosError } from '../types/axios'; // 假设类型定义文件放在这里
 
// 封装axios请求的hook
function useApi<T = any>(url: string, options?: AxiosRequestConfig): UseAxiosResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<AxiosError | null>(null);
    const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_API_URL,
      url,
      ...options,
    })
      .then((response: AxiosResponseData<T>) => {
        setData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url, options]);
 
  return { data, error, loading };
}
 
export default useApi;