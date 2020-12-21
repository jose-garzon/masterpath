// import Libraries
import Link from 'next/link';
import { useSelector } from 'react-redux';

// import component
import { SelectProject } from '../../components/SelectProject';
// import Styles
import { ProjectContainer, Button } from './styles';

// ---------- COMPONENT ---------- //
export const Project = () => {
	const { name, description, url } = useSelector((state) => state.projectState);

	return (
		<>
			<Button>Select Project</Button>
			{/* <SelectProject /> */}
			<ProjectContainer>
				<a target="_blank" href={url}>
					<h1>{name}</h1>
					<p>{description}</p>
				</a>
			</ProjectContainer>
		</>
	);
};
