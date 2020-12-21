import { useEffect, useState } from 'react';

// import Components
import { Layout } from '../components/Layout';
import { ProgressBar } from '../components/ProgressBars';
import { Project } from '../components/Project';
import { CoursesContainer } from '../components/CoursesContainer';
import { CourseCard } from '../components/CourseCard';
import { Milestones } from '../components/Milestones';
//import { SelectProject } from '../components/SelectProject';
import { axiosClient } from '../axiosClient';
import { ModalNews } from '../components/ModalNews';
// import Styles
// ---------- COMPONENT ---------- //
const MasterPath = () => {
	const [courses, setcourses] = useState([]);

	useEffect(() => {
		(async function getCourses() {
			const { data, status } = await axiosClient.get('courses-list/');
			setcourses(data);
		})();
	}, []);

	return (
		<Layout>
			{/* <ModalNews /> */}
			<ProgressBar />
			<Project />
			{/* <SelectProject /> */}
			<Milestones />
			<CoursesContainer title="Master Path">
				<h3>Requerimientos</h3>
				<hr />
				<CourseCard
					name="Curso de Design Thinking con Minds Garage"
					badge="designThinking.webp"
					link="https://platzi.com/clases/design-thinking/"
				/>
				<CourseCard
					name="Cómo ser un Product Designer por Aerolab"
					badge="product.webp"
					link="https://platzi.com/clases/product-designer/"
				/>
				<CourseCard
					name="Curso de User Research"
					badge="userResearch.webp"
					link="https://platzi.com/clases/user-research/"
				/>
				<h3>Diseño</h3>
				<hr />
				<CourseCard
					name="Curso de Figma"
					badge="figma.webp"
					link="https://platzi.com/clases/figma/"
				/>
				<CourseCard
					name="Curso de Fundamentos de Diseño de Interfaces UI y UX"
					badge="fundamentosDiseno.webp"
					link="https://platzi.com/clases/diseno-interfaces-ux/"
				/>
				<CourseCard
					name="Curso de Diseño Centrado en el Usuario"
					badge="disenocentradousuario.webp"
					link="https://platzi.com/clases/diseno-usuario/"
				/>
				<h3>Desarrollo</h3>
				<hr />
				<CourseCard
					name="Curso Profesional de Git y GitHub"
					badge="github.webp"
					link="https://platzi.com/clases/git-github/"
				/>
				<CourseCard
					name="Curso de Frontend Developer"
					badge="frontend.webp"
					link="https://platzi.com/clases/frontend-developer/"
				/>
				<CourseCard
					name="Fundamentos de JavaScript"
					badge="fundamentosjs.webp"
					link="https://platzi.com/clases/fundamentos-javascript/"
				/>
				<CourseCard
					name="Curso de Asincronismo con JavaScript"
					badge="asincronismo.webp"
					link="https://platzi.com/clases/asincronismo-js/"
				/>
				<CourseCard
					name="Curso Profesional de JavaScript"
					badge="profesionaljs.webp"
					link="https://platzi.com/clases/javascript-profesional/"
				/>
				<CourseCard
					name="Curso de Postman"
					badge="postman.webp"
					link="https://platzi.com/clases/postman/"
				/>
				<CourseCard
					name="Curso de React.js"
					badge="react.webp"
					link="https://platzi.com/clases/react/"
				/>
				<CourseCard
					name="Curso de Gestión de Dependencias y Paquetes con NPM"
					badge="npm.webp"
					link="https://platzi.com/clases/npm/"
				/>
				<CourseCard
					name="Curso de Redux por Bedu"
					badge="redux.webp"
					link="https://platzi.com/clases/redux/"
				/>
				<CourseCard
					name="Curso de Webpack"
					badge="webpack.webp"
					link="https://platzi.com/clases/webpack/"
				/>
				<h3>Pruebas</h3>
				<hr />
				<CourseCard
					name="Curso de Unit Testing con Jest en React"
					badge="jest.webp"
					link="https://platzi.com/clases/jest/"
				/>
				<CourseCard
					name="Curso de End to End Testing con Cypress"
					badge="cypress.webp"
					link="https://platzi.com/clases/testing-cypress/"
				/>
				<h3>Despliegue</h3>
				<hr />
				<CourseCard
					name="Curso de React.js"
					badge="react.webp"
					link="https://platzi.com/clases/react/"
				/>
				<CourseCard
					name="Curso de Gestión de Dependencias y Paquetes con NPM"
					badge="npm.webp"
					link="https://platzi.com/clases/npm/"
				/>
				<CourseCard
					name="Curso de Redux por Bedu"
					badge="redux.webp"
					link="https://platzi.com/clases/redux/"
				/>
				<CourseCard
					name="Curso de Webpack"
					badge="webpack.webp"
					link="https://platzi.com/clases/webpack/"
				/>
				<h3>Operaciones</h3>
				<hr />
				<CourseCard
					name="Curso Profesional de Git y GitHub"
					badge="github.webp"
					link="https://platzi.com/clases/git-github/"
				/>
				<CourseCard
					name="Curso de Frontend Developer"
					badge="frontend.webp"
					link="https://platzi.com/clases/frontend-developer/"
				/>
				<CourseCard
					name="Fundamentos de JavaScript"
					badge="fundamentosjs.webp"
					link="https://platzi.com/clases/fundamentos-javascript/"
				/>
				<CourseCard
					name="Curso de Asincronismo con JavaScript"
					badge="asincronismo.webp"
					link="https://platzi.com/clases/asincronismo-js/"
				/>
			</CoursesContainer>
		</Layout>
	);
};

export default MasterPath;
