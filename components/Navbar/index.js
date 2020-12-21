// import Libraries
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

// import Components
import { Expbar } from '../Expbar';
import { gravatar } from '../../utils/gravatar';
import { login } from '../../redux/actions/userActions';

// import Styles
import { NavbarContainer, NavbarImage, NavbarList } from './styles';

// ---------- COMPONENT ---------- //
export const Navbar = () => {
	const router = useRouter();
	const { route } = router;
	const dispatch = useDispatch();
	const { user, email, lv } = useSelector((state) => state.userState);

	useEffect(() => {
		dispatch(login());
	}, []);

	return (
		<NavbarContainer>
			<NavbarImage>
				<img src={gravatar(email)} alt={user} />
				<Expbar />
				<h3>{user}</h3>
				<h2>
					Lv: <span>{lv}</span> / 50
				</h2>
			</NavbarImage>
			<NavbarList>
				<Link href="/master-path">
					<li className={route === '/master-path' ? 'active' : null}>
						Master Path
					</li>
				</Link>
				<Link href="/bug-hunt">
					<li className={route === '/bug-hunt' ? 'active' : null}>Bug Hunt</li>
				</Link>
				{/* <Link href="/library">
					<li className={route === '/library' ? 'active' : null}>Library</li>
				</Link> */}
				<a target="_blank" href="https://master.platzi.com/dashboard/calendar">
					<li>This Week</li>
				</a>
				<a target="_blank" href="https://master.platzi.com/dashboard/schedule">
					<li>Office Hours</li>
				</a>
				<a
					target="_blank"
					href="https://master.platzi.com/dashboard/appointments"
				>
					<li>Appointments</li>
				</a>
			</NavbarList>
			<button onClick={() => router.push('/')}>Logout</button>
		</NavbarContainer>
	);
};
