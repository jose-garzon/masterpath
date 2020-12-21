// import Libraries

// import Components
import { Layout } from '../components/Layout';
import { BugCardContainer } from '../components/BugCardContainer';
import { ProgressBar } from '../components/ProgressBars';
// import Styles

const BugHunt = () => {
	return (
		<Layout>
			<ProgressBar />
			<BugCardContainer/>
		</Layout>
	);
};

export default BugHunt;
