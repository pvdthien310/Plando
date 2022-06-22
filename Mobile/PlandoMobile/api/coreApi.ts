import axios from 'axios'
import { AsyncStorage } from 'react-native'
import { local_base_URL } from '../constant.js'

const DatabaseClient = axios.create({
    baseURL: local_base_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

DatabaseClient.interceptors.request.use(
    async (config: any) => {
        let token = await AsyncStorage.getItem('accessToken')
        if (token) {
            config.headers['x-access-token'] = token
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// DatabaseClient.interceptors.response.use(
//     res => {
//         return res;
//     },
//     async err => {
//         if (err.response) {
//             const originalConfig = err.config;
//             if (err.response) {
//                 if (err.response.status === 401 && !originalConfig._retry) {
//                     originalConfig._retry = true;
//                     try {
//                         await AsyncStorage.setItem('accessToken', rs.accessToken)
//                         return DatabaseClient(originalConfig);
//                     }
//                     catch (_error) {
//                         return Promise.reject(_error);
//                     }
//                 }
//             }
//         }
//         return Promise.reject(err);
//     }
// )

export default DatabaseClient
