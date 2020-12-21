const initial_state = {
	name: 'Clone de Spotify',
	description:
		'Voy a desarrollar el frontend de spotify, prestando mayor interés en las animaciones.',
	url: 'https://github.com/jose-garzon/Clone-de-spotify',
};

export const projectState = (state = initial_state, action) => {
	const { type, payload } = action;

	switch (type) {
		default:
			return state;
	}
};
