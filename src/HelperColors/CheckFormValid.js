const checkFormValid = (colorList,name, oldColor, type) => {
          const value = name.toLowerCase();
		if (value === '') {
			return {
				error: true,
				errorMes: `Enter the ${type === 'dr' ? 'Color' : 'Palette'} Name`
			};
		}
		if (type === 'dr') {
			if (colorList.every(({ name }) => name.toLowerCase() === value)) {
				return { error: true, errorMes: 'This Name is already taken' };
			}
			if (colorList.every(({ color }) => color === oldColor)) {
                    return {
                         error: true, errorMes: 'This Color is already taken'};
			}
		} else {
			if (colorList.every(({ paletteName }) => paletteName.toLowerCase() === value)) {
				return {
					error: true,
					errorMes: 'This Palette Name is already taken'
				};
			}
		}
		return { error: false };
	};
export default checkFormValid;