// import Components
import { useSelector } from 'react-redux';

// import Styles
import { Bar } from './styles';

// ---------- COMPONENT ---------- //
export const Expbar = () => {
	const { exp, career, lv } = useSelector((state) => state.userState);

	const setStatus = () => {
		if (lv > 0 && lv < 20) {
			return 'Newbie';
		}
		if (lv >= 20 && lv < 40) {
			return `Mid ${career}`;
		}
		if (lv >= 40) {
			return `${career} Master`;
		}
	};

	return (
		<Bar XP={exp}>
			<p>{setStatus()}</p>
		</Bar>
	);
};
