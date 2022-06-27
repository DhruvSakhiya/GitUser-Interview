
import { Dimensions, Platform } from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

export const MOCKUP_DEVICE_WIDTH = 360;

export const MOCKUP_DEVICE_HEIGHT = 780;


export const W = (pixel) => {
    return (pixel * WINDOW_WIDTH) / MOCKUP_DEVICE_WIDTH;
};

export const H = (pixel) => {
    return (pixel * WINDOW_HEIGHT) / MOCKUP_DEVICE_HEIGHT;
};