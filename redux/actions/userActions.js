import { axiosClient } from '../../axiosClient';

export const login = () => async (dispatch) => {
	const user = {
		user: 'Jose Garzón',
		email: 'jd.garzon12@gmail.com',
		career: 'Frontend',
		lv: 4,
		exp: 10,
		progress: 10,
	};
	dispatch({
		type: 'GET_USER',
		payload: user,
	});
};

export const stepSucces = () => (dispatch, getState) => {
	const { exp, id } = getState().userState;
	dispatch({
		type: 'STEP_SUCCES',
	});

	if (exp >= 100) {
		const resExp = exp - 100;
		setTimeout(() => {
			dispatch({
				type: 'LEVEL_UP',
				payload: resExp,
			});
		}, 500);
	}
};

export const courseSucces = () => (dispatch, getState) => {
	dispatch({
		type: 'COURSE_SUCCES',
	});

	const { exp } = getState().userState;
	if (exp >= 100) {
		const resExp = exp - 100;
		setTimeout(() => {
			dispatch({
				type: 'LEVEL_UP',
				payload: resExp,
			});
		}, 500);
	}
};

export const bugSucces = () => (dispatch, getState) => {
	dispatch({
		type: 'BUG_SUCCES',
	});

	const { exp } = getState().userState;
	if (exp >= 100) {
		const resExp = exp - 100;
		setTimeout(() => {
			dispatch({
				type: 'LEVEL_UP',
				payload: resExp,
			});
		}, 500);
	}
};
