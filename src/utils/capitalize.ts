export const capitalizeFirstLetter = (str: string): string => {
    const strArray = str.split('');
    strArray[0] = strArray[0].toUpperCase();
    return strArray.join('');
};
