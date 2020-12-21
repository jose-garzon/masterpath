const initial_state = {
	id: 1,
	user: '',
	email: '',
	career: '',
	status: '0',
	exp: '',
	lv: '',
	progress: '',
};

export const userState = (state = initial_state, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'GET_USER':
			return { ...payload };
		case 'STEP_SUCCES':
			return { ...state, exp: state.exp + 80, progress: state.progress + 10 };
		case 'COURSE_SUCCES':
			return { ...state, exp: state.exp + 10 };
		case 'BUG_SUCCES':
			return { ...state, exp: state.exp + 20 };
		case 'LEVEL_UP':
			return { ...state, exp: payload, lv: state.lv + 1 };
		default:
			return state;
	}
};
