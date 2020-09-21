import errorMeg from '../FormErrorMeg/FormErrorMeg';
export default (input, colorList) => {
    const value = input.toLowerCase().trim();
    const color = colorList.map(({ paletteName }) =>
        paletteName.toLowerCase().trim()
    );
    const findindex = color.findIndex((name) => name === value);
    if (value === '') {
        return errorMeg.empty;
    } else if (findindex !== -1) {
        return errorMeg.haveTaken;
    } else if (/[\W]+/.test(input)) {
        return errorMeg.inValidType;
    }
    return false;
};
