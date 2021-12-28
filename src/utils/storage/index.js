import AsyncStorage from '@react-native-async-storage/async-storage';

export const AsyncStorageSetData = async (key, value) => {
  const stringValue = JSON.stringify(value);

  await AsyncStorage.setItem(key, stringValue);

  if (__DEV__) {
    console.log(`[AsyncStorage] Set ${key} = ${stringValue}`);
  }
};

export const AsyncStorageGetData = async key => {
  // const jsonValue = await AsyncStorage.getItem(key);

  // if (__DEV__) {
  //   console.log(`[AsyncStorage] Get item ${key} = ${jsonValue}`);
  // }

  // return JSON.parse(jsonValue);
  // return jsonValue != null ? JSON.parse(jsonValue) : null;

  try {
    const data = await AsyncStorage.getItem(key);
    if (__DEV__) {
      console.log(`[AsyncStorage] Get item ${key} = ${data}`);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const AsyncStorageRemoveItem = async key => {
  await AsyncStorage.removeItem(key);

  if (__DEV__) {
    console.log(`[AsyncStorage] Remove item ${key}`);
  }
};
