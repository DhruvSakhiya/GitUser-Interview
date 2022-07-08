import AsyncStorage from "@react-native-async-storage/async-storage";

export const persistConfig = {
    key: 'demo-root',
    storage: AsyncStorage,
    whitelist: ['users']
};