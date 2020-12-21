// import Libraries
import { useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

import { stepSucces } from '../../redux/actions/userActions';
// import Styles
import { Container, CheckButton } from './styles';

// ---------- COMPONENT ---------- //
export const MilestoneBadge = ({ number, name }) => {
	const dispatch = useDispatch();
	const [check, setcheck] = useState(false);

	const endStep = () => {
		setcheck(true);
		dispatch(stepSucces());
	};

	return (
		<Container check={check} name="hola">
			<h3>{name}</h3>
			<p>{number}</p>
			{!check && (
				<CheckButton onClick={endStep}>
					<AiFillCheckCircle color="#98ca3f" />
				</CheckButton>
			)}
		</Container>
	);
};
