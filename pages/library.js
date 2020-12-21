// import Libraries
import React, { useState, useEffect } from 'react';
import { axiosClient } from '../axiosClient';

// import Components
import { Layout } from '../components/Layout';

import { BreakingNewsContainer } from '../components/BreakingNewsContainer';
import { SearchBar } from '../components/SearchBar';
import { ArticleContainer } from '../components/ArticleContainer';
import { ProgressBar } from '../components/ProgressBars';

import { axiosDS } from '../axiosClient/DS';
// import Styles

const Library = () => {
	// const [news, setNews] = useState([]);

	// useEffect(() => {
	// 	(async function getNews() {
	// 		const { data, status } = await axiosClient.get('information-list/');
	// 		setNews(data);
	// 	})();
	// }, []);

	return (
		<Layout>
			<ProgressBar />
			{/* <BreakingNewsContainer data={news} /> */}
			<SearchBar />
			<ArticleContainer />
		</Layout>
	);
};

export default Library;
