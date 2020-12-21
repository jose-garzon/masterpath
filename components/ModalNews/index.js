//import component
import { NewsCardNotification } from '../NewsCardNotification'
import React, { useState, useEffect } from 'react';
import { axiosClient } from '../../axiosClient';
//import Style
import { ModalNewsContainer, ModalTitel } from './styles'

export const ModalNews = () => {
  const [clase, setClase] = useState(true);
  const [newsNotification, setnewsNotification] = useState([]);
        
  const closeModal = () => {
      setClase(false);
  };

	useEffect(() => {
		(async function getNews() {
			const { data, status } = await axiosClient.get('information-list/');
			setnewsNotification(data);
		})();
	}, []);
  console.log(newsNotification)
    return (
      <ModalNewsContainer open={clase}>
          <ModalTitel>
            <img onClick={closeModal} src='/Closebtn.svg' alt="Close icon" />
            <h3>News</h3>  
          </ModalTitel>

          {newsNotification.slice(2,5).map(({title, url, pub_date, id}) => (
					<NewsCardNotification
					title={title}
						url={url}
            pub_time={pub_date}
            key={id}
					/>
				))}
      </ModalNewsContainer>
    )
  }
