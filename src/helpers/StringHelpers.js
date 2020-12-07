export const replaceCRLFWithCommas = (str) => {
    if (str && str.length) {
        return str.replace(/[\n\r]/g, ',');
    }
};

export const replaceCommasWithCRLF = (str) => {
    if (str && str.length) {
        return str.replace(/,/g, '\n');
    }
};