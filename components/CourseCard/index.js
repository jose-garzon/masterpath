// import Libraries
import { useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

import { courseSucces } from '../../redux/actions/userActions';
// import Styles
import { Card, CheckcompletCours } from './styles';

// ---------- COMPONENT ---------- //
export const CourseCard = ({ badge, name, link }) => {
	const dispatch = useDispatch();
	const [checkCourse, setcheckCourse] = useState(false);

	const endStep = () => {
		setcheckCourse(true);
		dispatch(courseSucces());
	};
	return (
		<Card checkCourse={checkCourse}>
			<a href={link} target="_blank"></a>
			<img src={badge} alt={name} />
			<h3>{name}</h3>
			{!checkCourse && (
				<CheckcompletCours onClick={endStep}>
					<AiFillCheckCircle color="#98ca3f" />
				</CheckcompletCours>
			)}
		</Card>
	);
};
