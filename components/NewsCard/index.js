import { Card, News, ImgContainer, Img, Overview, Title, Tags } from './style'


export const NewsCard = ({ title, image_url, url, overview, tags }) => {


  return (
    <Card href={url} target="_blank">
      <News>
        <Title>{title}</Title>
      </News>
      <ImgContainer>
        <Img src={image_url} />
      </ImgContainer>
    </Card>
  )
}
