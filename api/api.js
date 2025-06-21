import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/IndianaCornell/my-json-test',
});

export const getMap = async () => {
  try {
    const res = await instance.get('/map');
    return res.data[0].url;
  } catch (error) {
    console.error('Error in getMap():', error);
    throw error;
  }
};

export const getObjects = async () => {
  try {
    const res = await instance.get('/object');
    return res.data;
  } catch (error) {
    console.error('Error in getObjects():', error);
    throw error;
  }
};

export const getServices = async () => {
  try {
    const res = await instance.get('/service');
    return res.data;
  } catch (error) {
    console.error('Error in getServices():', error);
    throw error;
  }
};

export const getHistory = async () => {
  try {
    const res = await instance.get('/history');
    return res.data;
  } catch (error) {
    console.error('Error in getHistory():', error);
    throw error;
  }
};
