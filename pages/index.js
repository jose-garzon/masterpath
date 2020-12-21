// import Libraries
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// import Components
import { login } from '../redux/actions/userActions';

// import Styles
import { Container, Form, Input } from '../globalStyles/HomeStyles';

const Home = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [form, setform] = useState({ user: '', password: '' });
	const [error, seterror] = useState({});

	const handleInput = ({ target }) => {
		seterror({});
		setform({
			...form,
			[target.name]: target.value,
		});
	};

	const validateForm = (form) => {
		const newErrors = {};
		if (form.user !== 'jd.garzon12@gmail.com') {
			newErrors.user = 'No estás registrado';
		}
		if (form.password !== 'platzi master') {
			newErrors.password = 'contraseña erronea';
		}
		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const result = validateForm(form);
		seterror(result);

		if (Object.keys(result).length === 0) {
			router.push('/master-path');
			dispatch(login());
		}
	};

	return (
		<Container onSubmit={handleSubmit}>
			<Form>
				<h1>Master Path</h1>
				<label htmlFor="e-mail">e-mail</label>
				<Input
					type="text"
					id="e-mail"
					name="user"
					placeholder="e-mail"
					onChange={handleInput}
				/>
				<label htmlFor="Password">Password</label>
				<Input
					type="password"
					id="Password"
					name="password"
					placeholder="Password"
					onChange={handleInput}
				/>
				<p>user: 'jd.garzon12@gmail.com'</p>
				<p>password: 'platzi master'</p>
				{error.user && <p>{error.user}</p>}
				{error.password && <p>{error.password}</p>}
				<button type="submit">Login</button>
			</Form>
		</Container>
	);
};

export default Home;
