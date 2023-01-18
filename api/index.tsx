import axios from 'axios'
import { store } from '../redux/store'
import { setIsLoading, setError } from '../redux/reducers/form.reducer'

const baseURL = 'http://localhost:3004'

export const axiosInstance = axios.create({ baseURL })

axiosInstance.interceptors.request.use((request: any) => {
  store.dispatch(setIsLoading(true))
  store.dispatch(setError(''))
  request.headers = {}
  return request
})

axiosInstance.interceptors.response.use(
  (res: any) => {
    store.dispatch(setIsLoading(false))
    return res
  },
  ({ response }: any) => {
    if (!response.ok) {
      store.dispatch(setIsLoading(false))
      store.dispatch(setError('Someting wrong'))
    }

    return Promise.reject(response)
  }
)

export const requestApi = (url: string, data: any = null, method: string = 'GET') => {
  return axiosInstance({ url, method, data })
}
