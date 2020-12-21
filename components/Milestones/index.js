// import Libraries
import { useState } from 'react';

// import Components
import { MilestoneBadge } from '../MilestoneBadge';

// import Styles
import { Container } from './styles';

// ---------- COMPONENT ---------- //
export const Milestones = ({ number }) => {
	const [check, setcheck] = useState(false);
	return (
		<Container>
			<MilestoneBadge number="01" name="Requerimientos" />
			<MilestoneBadge number="02" name="Diseño" />
			<MilestoneBadge number="03" name="Desarrollo" />
			<MilestoneBadge number="04" name="Pruebas" />
			<MilestoneBadge number="05" name="Despliegue" />
			<MilestoneBadge number="06" name="Operaciones" />
		</Container>
	);
};
