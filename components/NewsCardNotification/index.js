import { CardNotification, NewsTitleNotification, ImgContainerNotif, ImgNotf } from './styles'


export const NewsCardNotification = ({ title, url, pub_date, image_url }) => {


  return (
    <CardNotification href={url} target="_blank">
      <NewsTitleNotification>
        {title}
        <p>{pub_date}</p>
      </NewsTitleNotification>
      {/* <ImgContainerNotif>
        <ImgNotf src={image_url} />
      </ImgContainerNotif> */}
    </CardNotification>
  )
}
      
